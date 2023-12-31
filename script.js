const allBtns = [...document.getElementsByClassName("btn")];
// console.log(allBtns);

let strToDisplay = "";

const displayElm = document.querySelector(".display");
console.log(displayElm);

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      display(strToDisplay);
      return;
    }
    if (val === "C") {
      const str = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (operators.includes(val)) {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        // remove the last char from the strToDisplay
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  strToDisplay = ttl.toString();
};
