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
      "donut",
      "cupcake",
      "pancakes",
      "icecream",
      "cookie",
      "x2",
      "x5",
      "joker",
      "J",
      "A",
    ];
  }

//donut
//cupcake
//pancakes
//icecream
//cookie

  static get reels() {
    return [
      [
      "J",
      "P",
      "pancakes",
      "icecream",
      "cookie",
      "cupcake",
      "icecream",
      "donut",
      "cookie",
      "cookie",
      "pancakes",
      "donut",
      "cupcake",
      "cookie",
      "joker",
      "pancakes",
      "icecream",
      "cookie",
      "cupcake",
      "cupcake",
      "x2",
      "icecream",
      "cookie",
      "pancakes",
      "icecream",
    ],
    [
      "A",
      "O",
      "cookie",
      "x5",
      "cupcake",
      "pancakes",
      "cookie",
      "donut",
      "donut",
      "icecream",
      "pancakes",
      "donut",
      "cupcake",
      "pancakes",
      "icecream",
      "pancakes",
      "cookie",
      "cupcake",
      "joker",
      "donut",
      "icecream",
      "cookie",
      "pancakes",
      "icecream",
      "pancakes",
    ],
    [
      "C",
      "T",
      "icecream",
      "pancakes",
      "icecream",
      "cookie",
      "cookie",
      "pancakes",
      "donut",
      "cookie",
      "cupcake",
      "cookie",
      "donut",
      "cookie",
      "joker",
      "icecream",
      "cookie",
      "x5",
      "icecream",
      "cupcake",
      "cookie",
      "icecream",
      "cookie",
      "icecream",
      "icecream",
    ],
    [
      "K",
      "esc",
      "icecream",
      "icecream",
      "cookie",
      "icecream",
      "cookie",
      "cupcake",
      "donut",
      "cookie",
      "cupcake",
      "cookie",
      "x2",
      "pancakes",
      "icecream",
      "joker",
      "cookie",
      "icecream",
      "cupcake",
      "pancakes",
      "cookie",
      "icecream",
      "cookie",
      "cupcake",
      "pancakes",
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
