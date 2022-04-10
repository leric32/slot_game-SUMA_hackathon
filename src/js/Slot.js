import Reel from "./Reel.js";
import Symbol from "./Symbol.js";
import Checked from "./checked.js";

export default class Slot {
  constructor(domElement, config = {}) {
    //ucitava slike i pravi objekte simbola za svaki definsian simbol
    Symbol.preload();

    //prikazani simboli kad se loaduje strana
    this.currentSymbols = [
      ["donut", "J", "P", "pancakes"],
      ["x2", "A", "O", "icecream"],
      ["cupcake", "C", "T", "x5"],
      ["joker", "K", "esc", "cookie"],
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
    this.spec = 0;
    
    //pravi niz objelata Reel, onoliko koliko reelova ima u htmlu
    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.is_bonus = false;
    this.spinButton = document.getElementById("spin");
    this.ulogButton = document.getElementById("ulozi");
    this.overlay = document.getElementById("overlay");
    this.bodyElem = document.getElementById("body");
    this.bonusCards = document.getElementById("bonus_cards");
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
    if(this.is_bonus){
      this.nextSymbols = [
        Symbol.randomBonusReel(0),
        Symbol.randomBonusReel(1),
        Symbol.randomBonusReel(2),
        Symbol.randomBonusReel(3),
      ];
    }else{
      this.nextSymbols = [
        Symbol.randomReel(0),
        Symbol.randomReel(1),
        Symbol.randomReel(2),
        Symbol.randomReel(3),
      ];
    }
    

    this.onSpinStart(this.nextSymbols);

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd(this.nextSymbols));
  }

  onSpinStart(symbols) {
    this.spec = 0;
    this.spinButton.disabled = true;
    this.ulogButton.disabled = true;
    this.sum = parseInt(this.sumLabel.innerHTML);
    this.sum -= 100;
    if(this.is_bonus) this.sum+=100;
    this.sumLabel.innerHTML=this.sum;
    
    //ovde se poziva checked sa racunanjem dobitka
    var checkIns = new Checked(symbols, this.sum);
    var news = checkIns.checked();
    this.sum += news;
    console.log("suma");
    console.log(this.sum);
    console.log(news);
    
    this.spec = -2;
    //this.spec = checkIns.checkedJoker();
    if(this.is_bonus) this.bonus_counter-=1;
    if(this.bonus_counter == 0){
      this.is_bonus = false;
      this.bodyElem.classList.remove('bonus_body');
      this.bodyElem.classList.add('body');
    }  
    this.config.onSpinStart?.(symbols);
    
    
  }

  onSpinEnd(symbols) {
    this.spinButton.disabled = false;
    

    this.sumLabel.innerHTML=this.sum;
    if(this.spec == -1){
      this.overlay.style.display = "block";
      this.bonusCards.style.display = "block";
    }
    if(this.spec == -2){
      this.is_bonus = true;
      this.bonus_counter = 2;
      this.bodyElem.classList.add('bonus_body');
      this.bodyElem.classList.remove('body');
    }

    this.ulogButton.disabled = false;
    this.config.onSpinEnd?.(symbols);

    if (this.autoPlayCheckbox.checked) {
      return window.setTimeout(() => this.spin(), 200);
    }
  }
}
