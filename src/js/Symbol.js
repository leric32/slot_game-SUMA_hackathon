const cache = {};

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      this.img.src = require(`../assets/symbols/${name}.png`);

      cache[name] = this.img;
    }
  }

  static preload() {
    Symbol.symbols.forEach((symbol) => new Symbol(symbol));
    for(let i = 0; i < 4; i++){
      Symbol.reels[i].forEach((symbol) => new Symbol(symbol));
    }
  }
   
  static get symbols() {
    return [
      "at_at1",
      "c3po1",
      "darth_vader1",
      "death_star1",
      "falcon1",
      "r2d21",
      "stormtrooper1",
    ];
  }


  static get reels() {
    return [
      [
      "J",
      "pancakes",
      "cookie",
      "joker",
      "x2",
      "x5",
      "icecream",
      "cupcake",
      "donut",
      "A",
    ],
    [
      "J",
      "pancakes",
      "cookie",
      "joker",
      "x2",
      "x5",
      "icecream",
      "cupcake",
      "donut",
      "A",
    ],
    [
      "J",
      "pancakes",
      "cookie",
      "joker",
      "x2",
      "x5",
      "icecream",
      "cupcake",
      "donut",
      "A",
    ],
    [
      "J",
      "pancakes",
      "cookie",
      "joker",
      "x2",
      "x5",
      "icecream",
      "cupcake",
      "donut",
      "A",
    ],
  ]
  }

  static random() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }

  static randomReel(i){
    let reel = this.reels[i];
    console.log(i);
    console.log(reel);
    let rnd = Math.floor(Math.random() * reel.length);
    let rnd_end = (rnd+4);
    console.log("reels[i]");
    console.log(rnd);
    console.log(rnd_end);
    if(rnd_end < reel.length){
      console.log(reel.slice(rnd, rnd_end));
      return reel.slice(rnd, rnd_end);
    }
    rnd_end = rnd_end % reel.length;
    let arr = reel.slice(rnd);
    arr = arr.concat(reel.slice(0, rnd_end));
    return arr;
  }

}
