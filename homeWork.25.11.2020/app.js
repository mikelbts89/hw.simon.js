// let randomNumberOne = Math.floor(Math.random() * 10);
// let randomNumberTwo = Math.floor(Math.random() * 10);
// let randomNumberThree = Math.floor(Math.random() * 4);

function doCalc(functionCalc) {
  let randomNumberOne = Math.floor(Math.random() * 10);
  let randomNumberTwo = Math.floor(Math.random() * 10);
  return  functionCalc(randomNumberOne, randomNumberTwo);

}

let randomCalc = (a,b) => {
  let randomNumberThree = Math.floor(Math.random() * 4);
  let calcOptions = [a + b, a - b, a * b, a / b];
  return calcOptions[randomNumberThree] 
};

let result1 = doCalc(randomCalc)
console.log(result1)

// console.log(doCalc(randomNumberOne, randomNumberTwo));

// function doCalc2(a, b) {
//   //   let randomNumberThree = Math.floor(Math.random() * 4);
//   let calcOptions = [
//     { plus: a + b },
//     { minus: a - b },
//     { Dual: a * b },
//     { division: a / b },
//   ];
//   return calcOptions[randomNumberThree];
// }

// console.log(doCalc2(randomNumberOne, randomNumberTwo));

//////////////////////////////////////////////////////////////////

function showMessage(message, a) {
  console.log("************");
  message(a);
  console.log("************");
}

function myMessage(b) {
  console.log(b);
}

showMessage(myMessage, ":)");
showMessage(myMessage, ":(");

/////////////////////////////////////////////////////////////////////////

const users = [
  { firstName: "Mikel", lastName: "Bugayets", id: "1" },
  { firstName: "Anna", lastName: "Bugayets", id: "2" },
  { firstName: "Thomas", lastName: "Bugayets", id: "3" },
  { firstName: "Charley", lastName: "Bugayets", id: "4" },
  { firstName: "Sem", lastName: "Bugayets", id: "5" },
  { firstName: "Adam", lastName: "Badana", id: "6" },
  { firstName: "Tomer", lastName: "Kapara", id: "7" },
  { firstName: "Rotem", lastName: "Lavon", id: "8" },
  { firstName: "David", lastName: "Aronov", id: "9" },
  { firstName: "Yakov", lastName: "Karap", id: "10" },
  { firstName: "Alex", lastName: "Zema", id: "11" },
  { firstName: "Asaf", lastName: "Buli", id: "12" },
  { firstName: "Dor", lastName: "Favin", id: "13" },
  { firstName: "Ray", lastName: "Copar", id: "14" },
];

const searchUser = (name) => {
  let nameChecker = false;
  const userName = users.find((item) => {
    if (item.firstName.toLocaleLowerCase() == name.toLocaleLowerCase()) {
      nameChecker = true;
      return item;
    }
  });
  if (nameChecker == false) {
    return console.log("Name not found");
  }
  return userName;
};

let result = searchUser("yakov");
console.log(result);
