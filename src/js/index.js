import Slot from "./Slot.js";

const config = {
  inverted: false, // true: reels spin from top to bottom; false: reels spin from bottom to top
  onSpinStart: (symbols) => {
    console.log("onSpinStart", symbols);
    //ovde se vec zna sta se dobilo
  },
  onSpinEnd: (symbols) => {
    console.log("onSpinEnd", symbols);
  },
};

const slot = new Slot(document.getElementById("slot"), config);
