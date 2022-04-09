import Reel from "./Reel.js";
import Symbol from "./Symbol.js";

export default class Slot {
  constructor(domElement, config = {}) {
    //ucitava slike i pravi objekte simbola za svaki definsian simbol
    Symbol.preload();

    //prikazani simboli kad se loaduje strana
    this.currentSymbols = [
      ["death_star", "death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star", "death_star"],
    ];

    //placeholder za sledci pritisak dugmeta spin, randomizuje se na dugme spin
    this.nextSymbols = [
      ["death_star", "death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star", "death_star"],
    ];

    this.container = domElement;
    
    //pravi niz objelata Reel, onoliko koliko reelova ima u htmlu
    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );


    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    this.autoPlayCheckbox = document.getElementById("autoplay");

    if (config.inverted) {
      this.container.classList.add("inverted");
    }

    this.config = config;
  }

  //poziva se na klik spina
  spin() {
    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random(), Symbol.random()],
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

    this.config.onSpinStart?.(symbols);
  }

  onSpinEnd(symbols) {
    this.spinButton.disabled = false;

    this.config.onSpinEnd?.(symbols);

    if (this.autoPlayCheckbox.checked) {
      return window.setTimeout(() => this.spin(), 200);
    }
  }
}
