const Account = function (name, balance) {
    this.name = name;
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance = this.balance + amount;
    };
    this.withdraw = function (amount) {
        const total = this.balance - amount;
        if (total >= 0) {
            this.balance = total;
        }
    }
};

const Bank = function (...accounts) {
    this.accounts = accounts;
    const accountList = $("#account-list");
    this.addAccount = function (accountName) {
        const account = new Account(accountName, 0);
        this.accounts.push(account);
        const li = $(`<li>${account.name}: $${account.balance}</li>`);
        accountList.append(li);
    };
    this.removeAccount = function (accountName) {
        const account = findAccount(this.accounts, accountName);
        const index = this.accounts.indexOf(account);
        this.accounts.splice(index, 1);
        $(`li:contains(${accountName})`).remove();
    };
    this.deposit = function (accountName, amount) {
        const account = findAccount(this.accounts, accountName);
        account.deposit(amount);
        $(`li:contains(${accountName})`).text(`${account.name}: $${account.balance}`);
        
    };
    this.withdraw = function (accountName, amount) {
        const account = findAccount(this.accounts, accountName);
        account.withdraw(amount);
        $(`li:contains(${accountName})`).text(`${account.name}: $${account.balance}`);
    };

    function findAccount(accounts, accountName) {
        for (const account of accounts) {
            if (account.name === accountName) {
                console.log('FOund');
                return account;
            }
        }
        return null;
    }
};

const gringottsBank = new Bank();

$('#add-account-button').click(() => {
    gringottsBank.addAccount($('#account').val());
});
$('#remove-account-button').click(() => {
    gringottsBank.removeAccount($('#account').val());
});
$('#deposit-button').click( () => {
    const account = $('#deposit-account-name').val();
    const amount = Number($('#deposit-amount').val());
    gringottsBank.deposit(account, amount);    
});
$('#withdraw-button').click( () => {
    const account = $('#deposit-account-name').val();
    const amount = Number($('#withdraw-amount').val());
    gringottsBank.withdraw(account, amount);
});