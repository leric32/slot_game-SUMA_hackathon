import Reel from "./Reel.js";
import Symbol from "./Symbol.js";
import Checked from "./checked.js";

export default class Slot {
  constructor(domElement, config = {}) {
    //ucitava slike i pravi objekte simbola za svaki definsian simbol
    Symbol.preload();

    //prikazani simboli kad se loaduje strana
    this.currentSymbols = [
      ["death_star1", "death_star1", "death_star1", "death_star1"],
      ["death_star1", "death_star1", "death_star1", "death_star1"],
      ["death_star1", "death_star1", "death_star1", "death_star1"],
      ["death_star1", "death_star1", "death_star1", "death_star1"],
    ];

    //placeholder za sledci pritisak dugmeta spin, randomizuje se na dugme spin
    this.nextSymbols = [
      ["death_star1", "death_star1", "death_star1", "death_star1"],
      ["death_star1", "death_star1", "death_star1", "death_star1"],
      ["death_star1", "death_star1", "death_star1", "death_star1"],
      ["death_star1", "death_star1", "death_star1", "death_star1"],
    ];

    this.container = domElement;
    this.sum = 0;
    
    //pravi niz objelata Reel, onoliko koliko reelova ima u htmlu
    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );


    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    this.autoPlayCheckbox = document.getElementById("autoplay");
    this.sumLabel = document.getElementById("suma");

    if (config.inverted) {
      this.container.classList.add("inverted");
    }

    this.config = config;
  }

  static ulozi(i){
    this.sum+=i;
  }

  //poziva se na klik spina
  spin() {
    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      Symbol.randomReel(0),
      Symbol.randomReel(1),
      Symbol.randomReel(2),
      Symbol.randomReel(3),
    ];

    this.onSpinStart(this.nextSymbols);

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd(this.nextSymbols));
  }

  onSpinStart(symbols) {
    this.spinButton.disabled = true;
    this.sum = parseInt(this.sumLabel.innerHTML);

    //ovde se poziva checked sa racunanjem dobitka
    var checkIns = new Checked(symbols, this.sum);
    var news = checkIns.checked();
    this.sum += news;
    console.log("suma");
    console.log(this.sum);
    console.log(news);
    this.config.onSpinStart?.(symbols);
  }

  onSpinEnd(symbols) {
    this.spinButton.disabled = false;

    this.sumLabel.innerHTML=this.sum;
    this.config.onSpinEnd?.(symbols);

    if (this.autoPlayCheckbox.checked) {
      return window.setTimeout(() => this.spin(), 200);
    }
  }
}
