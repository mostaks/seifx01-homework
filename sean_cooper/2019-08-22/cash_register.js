cash_register.js

const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function checkout(obj) {
  let total = 0;
  for (let key in obj) {
    total = total + parseFloat(obj[key]);
  };
  return total;
}