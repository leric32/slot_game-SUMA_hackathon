import Symbol from "./Symbol.js";

export default class Reel {
  constructor(reelContainer, idx, initialSymbols) {
    //container je id = reel
    this.reelContainer = reelContainer;
    this.idx = idx;

    this.symbolContainer = document.createElement("div");
    this.symbolContainer.classList.add("icons");
    this.reelContainer.appendChild(this.symbolContainer);

    this.animation = this.symbolContainer.animate(
      [
        { transform: "none", filter: "blur(0)" },
        { filter: "blur(2px)", offset: 0.5 },
        {
          transform: `translateY(-${
            ((Math.floor(this.factor) * 10) /
              (4 + Math.floor(this.factor) * 10)) *
            100
          }%)`,
          filter: "blur(0)",
        },
      ],
      {
        //ovo moze da se menja za rucku
        duration: this.factor * 1000,
        easing: "ease-in-out",
      }
    );
    this.animation.cancel();

    //custom pocetni simboli u slot.js
    initialSymbols.forEach((symbol) =>
      this.symbolContainer.appendChild(new Symbol(symbol).img)
    );
  }

  get factor() {
    return 1 + Math.pow(this.idx / 2, 2);
  }

  renderSymbols(nextSymbols) {
    const fragment = document.createDocumentFragment();

    //bira koji ce simbol biti sledeci
    //problematicno je sto ne prati red nego uzima random
    for (let i = 4; i < Math.floor(this.factor) * 10 ; i++) {
      console.log(4 + Math.floor(this.factor) * 10);
      const icon = new Symbol(  
        i >= 10 * Math.floor(this.factor) - 2
          ? nextSymbols[i - Math.floor(this.factor) * 10]
          : undefined
      );
      console.log(icon.img);
      fragment.appendChild(icon.img);
    }
    for (let i = 0; i < 4 ; i++) {
      console.log(4 + Math.floor(this.factor) * 10);
      const icon = new Symbol(
        nextSymbols[i]
        /*
        i >= 10 * Math.floor(this.factor) - 2
          ? nextSymbols[i - Math.floor(this.factor) * 10]
          : undefined
        */
      );
      console.log(icon.img);
      fragment.appendChild(icon.img);
    }
    console.log("ovde");
    this.symbolContainer.appendChild(fragment);
  }

  spin() {
    const animationPromise = new Promise(
      (resolve) => (this.animation.onfinish = resolve)
    );
    const timeoutPromise = new Promise((resolve) =>
      setTimeout(resolve, this.factor * 1000)
    );

    this.animation.play();

    return Promise.race([animationPromise, timeoutPromise]).then(() => {
      if (this.animation.playState !== "finished") this.animation.finish();

      const max = this.symbolContainer.children.length - 4;

      for (let i = 0; i < max; i++) {
        this.symbolContainer.firstChild.remove();
      }
    });
  }
}
