//Geometry Function Lab

//Part 1, Rectangle

const rectangleA = {
	length: 4,
	width: 4
  };

const isSquare = (rectangleA)=>{
	  if(rectangleA.length === rectangleA.width){
		  return 'isSquare'
	  }
  }

const area = ({length,width})=>{
	return length * width
}

const perimeter = ({length,width})=>{
	return 2*(length+width)
}

let isSquareA = isSquare(rectangleA)
let areaA = area(rectangleA)
let perimeterA = perimeter(rectangleA)

console.log(isSquareA)
console.log(areaA);
console.log(perimeterA);


//Part 2, Triangle

const triangleA = {
	sideA: 3,
	sideB: 4,
	sideC: 5
  };

const isEquilateral = ({sideA,sideB,sideC})=>{
	 if(sideA === sideB && sideA===sideC){
		 return true
	 }else{
		 return false
	 }

}
const isIsosceles = ({sideA,sideB,sideC}) => {
	if(sideA === sideB || sideA===sideC || sideB === sideC){
		return true
	}else{
		return false
	}
}
const areaTriangle = ({sideA,sideB,sideC})=>{
	let p = (sideA + sideB + sideC)/2
	let areaTriangle = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC))

	return areaTriangle
}
const isObtuse = ({sideA,sideB,sideC}) =>{
	if(Math.pow(sideA,2) > Math.pow(sideB,2) + Math.pow(sideC,2) ||Math.pow(sideB,2) > Math.pow(sideA,2) + Math.pow(sideC,2)||Math.pow(sideC,2) > Math.pow(sideA,2) + Math.pow(sideB,2)){
		return true
	}else{
		return false
	}
}

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(areaTriangle(triangleA));
console.log(isObtuse(triangleA));


//The Cash Register

const cartForParty = {  
	banana: "1.25",
	handkerchief: ".99",
	Tshirt: "25.01",
	apple: "0.60",
	nalgene: "10.34",
	proteinShake: "22.36"
  };
  


const cashRegister=(cart)=>{
	let accumulator = 0
	for (let key in cart){
		accumulator = accumulator + parseFloat(cart[key]) 
		console.log(accumulator);

	}
	return accumulator	
}

console.log("cashTotal",cashRegister(cartForParty));



//Credit Card Validation


const allDigitsSame = (creditCardNumber) =>{
	for(let i=0; i<creditCardNumber.length - 1;i++){
		if (creditCardNumber[i] !==creditCardNumber[i+1]){
			return false
		}
	}
	return true
}

const isOdd = (num) => num % 2
const sumDigit = (numbers) =>{
	let accumulator = 0;
	for (let num of numbers){
		num = parseInt(num)
		if(Number.isInteger(num)){
		accumulator = accumulator + num
		}
	}
	return accumulator
}


const validateCreditCard = (creditCardNumber) =>{
	creditCardNumber = creditCardNumber.replace(/-/g,'')
	if(parseInt(creditCardNumber)){
		// creditCardNumber = parseInt(creditCardNumber)


		if (!creditCardNumber.length ===16){
			return false
		}else if(!Number.isFinite(parseInt(creditCardNumber))){
			return false
		}else if(allDigitsSame(creditCardNumber)){
			return false
		}else if(isOdd(creditCardNumber[creditCardNumber.length - 1])){
			return false
		}else if(sumDigit(creditCardNumber) <= 16){
			return false
		}else {
			return true
		}
	}
	return false
}

// const test = '9999-9999-8888-0000'

// console.log(sumDigit(test))

const creditCards = [
	'9999-9999-8888-0000',
	'6666-6666-6666-1666',
	'a923-3211-9c01-1112',
	'4444-4444-4444-4444',
	'1111-1111-1111-1110',
	'6666-6666-6666-6661'
]

creditCards.forEach((number)=>{
	console.log(number,validateCreditCard(number))
})

//JavaScript Bank

const bank =[
	account1 = {
		name:'lee',
		balance:10
	},
	account2 = {
		name:'Yianni',
		balance:30
	},

	account3 = {
		name:'Fede',
		balance:-20
	}
]

const totalSum = (bank) => { 
	let Sum = 0

	bank.forEach((account)=>{
		Sum += account.balance
	})
	return Sum
}

const addAccount = (newAccount) =>{
	return bank.push(newAccount)
}

const makeDeposits = (name,deposit) =>{
	bank.forEach((account)=>{
		if(account.name === name){
			account.balance += deposit
			return account.balance
		}
	})
}

const makeWithdrawals = (name,withdrawal) =>{
	bank.forEach((account)=>{
		if(account.name === name){
			account.balance -= withdrawal
			return account.balance
		}
	})
}

const checkBalancePositive = (accounts) => {
	accounts.forEach(account=>{
		if(account.balance < 0){
			console.log(`${account.name}, your balance cannot less than 0`)
		}
	})
}

const transfer = (sender, receiver, transferAmount) => {
	bank.forEach((account)=>{
		if(account.name === sender){
			account.balance -= transferAmount
		}
		if(account.name === receiver){
			account.balance += transferAmount
		}
	})	
}

console.log(totalSum(bank))

//add new account 4
account4 = {
	name:'aaron',
	balance:100
}

addAccount(account4)
console.log(totalSum(bank))

makeDeposits('lee',1000)
console.log(totalSum(bank))

makeWithdrawals('lee',20)
console.log(totalSum(bank))

checkBalancePositive(bank)

transfer('lee', 'aaron', 80)
console.log(bank)