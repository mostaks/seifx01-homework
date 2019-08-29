let bank = [
  { accNumber: 1,
    accBal: 10,
    accName: 'Paulo Amaral'
  },
    { accNumber: 2,
    accBal: 100,
    accName: 'Robbie Faroe'
  },
    { accNumber: 3,
    accBal: 1000,
    accName: 'Stallone Cobra'
  }
  
]


console.log(bank);

let totalSum = 0;
function sumAcc(accs) {
    let result = 0;
    for (let index = 0; index < accs.length; index++) {
        result = result + (accs[index].accBal);
        //console.log(accs[index].accBal)
        //console.log(result);
    }
    totalSum = result;
    console.log(`the total sum of accounts is currently of $ ${totalSum} `);
}

sumAcc(bank)

bank.push({accNumber: (bank.length+1), accBal: 0, accName: `New Customer's name`});

//console.log(bank);
//sumAcc(bank)

// Cash deposits and withdraws
let accMoved = 4;
let cashMovement = 30;

function banking(acc, value){
  
    console.log(`Sorry, but accounts cannot have negative balance. Please, see your bank manager for further info.`);

   if ((acc === bank[accMoved-1].accNumber) && ((bank[accMoved-1].accBal + value) > 0)){
    bank[accMoved-1].accBal += value

  console.log(`the balance for the account number ${accMoved} is of $ ${bank[accMoved-1].accBal}`);}
  else{
        console.log(`Sorry, this transaction was unsuccessful. Please, see your bank manager for further info.`);
  }
}
banking(accMoved, cashMovement)

//console.log(bank);
//sumAcc(bank)

let accOrigin = 4;
let accDestiny = 3;
let transferValue = 50;

let accOrigin2 = 3;
let accDestiny2 = 4;
let transferValue2 = 100;

function cashTransfer(origin, destiny, value){
  if  ((bank[origin-1].accBal - value) > 0){
  bank[origin-1].accBal -= value;
  bank[destiny-1].accBal += value;
  console.log(`The new balance of the origin and destiny accounts are respectively: $ ${bank[origin-1].accBal} and ${bank[destiny-1].accBal}`)
}
else{
        console.log(`Sorry, this transaction was unsuccessful. Make sure you have suficient funds. Please, see your bank manager for further info.`);
  }
}

cashTransfer(accOrigin, accDestiny, transferValue)

cashTransfer(accOrigin2, accDestiny2, transferValue2)

console.log(bank);
sumAcc(bank)