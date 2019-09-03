const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
// for loop

// for (let index = 0; index < companies.length; index++) {
//      console.log(companies[index]);
// }

//                       The forEach() method executes a provided function once for each array element.                     //

// companies.forEach(company => {
//     console.log(company.start + " " + company.end)
// });

//              filter() creates a new array with elements that fall under a given criteria from an existing array           //

// filter method - filtering ages 21 and over.
//
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// filter method - filtering retail companies from object.
//
// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies);

// filter companies with a start date on 1981
//
// const companies81 = companies.filter(company => company.start === 1981);
// console.log(companies81);

// filter companies from the 80s
// //
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990 ));
// console.log(eightiesCompanies);

// filter companies that lasted longer than 10 years.
//
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears);


//            The map() method creates a new array with the results of calling a provided function on every element in the calling array.         //

// create new array of company names.
//
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// create an array with company names and start - end year
//
// const newArr = companies.map(company => `${company.name} [${company.start}] - [${company.end}]`);
// console.log(newArr);

// create a new array that squares the ages array
// 
// const ageSquared = ages.map(age => Math.sqrt(age));
// console.log(ageSquared);

// you can string map together like this
// const ageMap = ages
//     .map(age => Math.sqrt(age)) //format each map on seperate lines to make it more readable
//     .map(age => age * 2)
//     .map(age => Math.ceil(age));

// console.log(ageMap);

//          The sort() method sorts the elements of an array in place and returns the sorted array.           //

// sort companies by start year. You need to compare the companies and return either a 1 if true and a -1 if false this will create order of the array
//
// with arrow function and teranary operator. 
// const companiesStartYear = companies.sort((a, b) => a.start > b.start ? 1 : -1);
// console.log(companiesStartYear);
//
// the same sort without arrow function and teranry operator. 
// const companiesStartYear = companies.sort(function(a,b) {
//     if (a.start > b.start){
//         return 1;
//     } return -1
// }); 
// console.log(companiesStartYear);

//