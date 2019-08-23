let bank = [];
let accounts = {
  ownerName: '',
  balance: 0
};

function addAccount(ownerName,balance) {
  if (balance >= 0) {
    let accounts = new Object();
    accounts.ownerName = ownerName;
    accounts.balance = balance;
    bank.push(accounts);
    console.log(`Congrats ${ownerName}! Your account have been created. You have $ ${balance} in your account.\n`)
  return accounts;
  } else {
    return;
  }
}

function depositMoney(ownerName, balance) {
  for (i=0; i<bank.length ; i++) {
    if (ownerName === bank[i].ownerName) {
      bank[i].balance += balance;
      console.log(`${ownerName}! You have deposit $ ${balance} into your account. You now have $ ${bank[i].balance} in your account.\n`)
    }
  }
}

function withdrawMoney(ownerName, balance) {
  for (i=0; i<bank.length; i++) {
    if (ownerName === bank[i].ownerName && balance <= bank[i].balance) {
      bank[i].balance -= balance;
      console.log(`${ownerName}! You have withdraw $ ${balance} from your account. You now have $ ${bank[i].balance} in your account.\n`)
    } else {
      console.log(`Sorry, ${ownerName}. You can't withdraw $ ${balance}, your account only have $ ${bank[i].balance} \n`);
      return;
    }
  }
}

function transferMoney(ownerName, tranferTo, balance) {
  for (i=0; i<bank.length; i++) {
    if (ownerName === bank[i].ownerName && balance <= bank[i].balance) {
      bank[i].balance -= balance;
      console.log(`${ownerName}, you have successfully transfered ${balance} to ${tranferTo}'s account. You now have $ ${bank[i].balance} in your account.\n`)
    } else if (ownerName === bank[i].ownerName && balance >= bank[i].balance){
      console.log(`Sorry, ${ownerName}. You can't transer $ ${balance} to ${tranferTo}'s account, your account only have $ ${bank[i].balance} \n`);
      return;
    }
  }
  for (i=0; i<bank.length; i++) {
    if (tranferTo === bank[i].ownerName) {
      bank[i].balance += balance;
    }
  }
}


addAccount('Pitt',100);
addAccount('Pat',200);
addAccount('Tintin',3000);

depositMoney('Pat',300);
withdrawMoney('Pitt',200);
withdrawMoney('Pitt',20);
transferMoney('Tintin','Pitt',4000);
transferMoney('Tintin','Pitt',2000);

console.log(bank);
