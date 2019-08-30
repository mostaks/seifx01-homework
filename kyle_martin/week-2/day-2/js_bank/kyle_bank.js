let bank = [
    {
       ownersName : 'Kyle Harman',
       accountBalance : 20240, 
    },
    {
        ownersName : 'Joe Blogs',
        accountBalance : 76543, 
     },
     {
        ownersName : 'Jessica McMunn',
        accountBalance : 50, 
     },
     {
        ownersName : 'Adam Gilbert',
        accountBalance : 24, 
     },
     {
        ownersName : 'Debbie Peachey',
        accountBalance : 9730, 
     },               
];

//add new object to bank array.
function addAccount(name, balance) {
    let newAccount = {ownersName : name, accountBalance : balance};
    bank.push(newAccount);
    console.log(bank);
    return bank; 
}; 
addAccount('Fred Perry', 23542);

//get account balance
function getBalance(name){
    for(balance of bank){
        if (balance.ownersName === name){
            console.log(`${name} your current balance is $${balance.accountBalance}`);
            return balance.accountBalance;
        }
    }
}
getBalance("Jessica McMunn");

//deposit money function
function deposit(name, amount) {
   for (depositToAccount of bank) {
        if (depositToAccount.ownersName === name) {
            depositToAccount.accountBalance += amount; 
            console.log(`${name} you deposited $${amount} your new balance is $${depositToAccount.accountBalance}`);
            return depositToAccount.accountBalance;
        }
    }
};    
deposit('Kyle Harman', 10000);

//withdraw money funcion with below 0 check
function withdraw(name, amount) {
    for (withdrawFromAccount of bank) {
        if (withdrawFromAccount.ownersName === name) {
            if (amount > withdrawFromAccount.accountBalance) {
                console.log(`Insufficient Funds`); 
                return true; 
            }
            withdrawFromAccount.accountBalance -= amount; 
            console.log(`${name} you withdrew $${amount} your new balance is $${withdrawFromAccount.accountBalance}`);
            return withdrawFromAccount.accountBalance;
         }
     }
 };    
 withdraw('Adam Gilbert', 10);

//  transfer money
 function transfer(from, to, amount) {
    for (transaction of bank){
        if(transaction.ownersName === from) {
            transaction.accountBalance -= amount;
        }
        if(transaction.ownersName === to){
            transaction.accountBalance += amount;
            console.log(`${from} sent $${amount} to ${to}`)
        }
    } 
 }
 transfer('Kyle Harman', 'Jessica McMunn', 200);
 console.log(`${bank[2].ownersName} new balance is $${bank[2].accountBalance}`);