let bank = {
	accounts: [],
	addAccount: function (accountName, initialBalance) {
		let account = {
			name: accountName,
			balance: initialBalance,
			deposit: function (amount) {
				this.balance += amount;
			},
			withdraw: function (amount) {
				this.balance -= amount;
			}
		};

		this.accounts.push(account);
		return account;
	},
	getTotal: function () {
		let total = 0;
		this.accounts.forEach(function (acc) {
			total = total + acc.balance;
		});
		return total;
	},

	displayAllAccounts: function () {
		console.log('Name\t\tBalance');
		this.accounts.forEach(function (a) {
			console.log(`${a.name}\t\t${a.balance}`);
		});
	}
};

let aaron = bank.addAccount('Aaron', 10);
let bob = bank.addAccount('Bob', 10);
let fred = bank.addAccount('Fred', 10);

console.log(bank.getTotal());

bank.displayAllAccounts();

let name = document.getElementsByTagName('p')[0];
name.textContent = bob.name;

let bal = document.getElementsByTagName('p')[1];
bal.textContent = "$" + bob.balance;