// /////////////////// Ex.1 /////////////////////////

// let users = [
//   { name: "Mikel", lastName:"Bugayets", },
//   { name: "Anna", lastName:"Bugayets", },
//   { name: "Thomas", lastName:"Bugayets", },
//   { name: "Charlie", lastName:"Bugayets", },
//   { name: "Sem", lastName:"Bugayets", },
// ];

// let findUser = (userName) => {
//   return new Promise((resolve, reject) => {
//     let foundUser = users.find((user) => user.name.toLowerCase() == userName.toLowerCase());
//    setTimeout(() => {
//     if (foundUser) {
//         resolve(foundUser);
//     } else {
//       reject("no user was found");
//     }
//    }, 5000);
//   });
// };

// findUser("mikel")
// .then((a)=>console.log(a))
// .catch((b)=>console.log(b))

// ////////////////////////////////////////////////////

// ////////////////////// Ex.2 /////////////////////////////////

// let numArr = [];

// for (let i = 0; i < 20; i++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   numArr.push(randomNumber);
// }

// let getNumbers = (num) => {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           let fillteredNumbers = numArr.filter(number => number>num)
//           resolve(fillteredNumbers)
//       }, 5000);
//   });
// };

// getNumbers(34).then((a)=>console.log(a))

// /////////////////////////////////////////////////////////////////

// /////////////////// Ex.3 /////////////////////////////

// let getRandom = () => {
//   return new Promise((resolve) => {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     setTimeout(() => {
//       resolve(randomNumber);
//     }, 2000);
//   });
// };

// let getRandom1 = () => {
//   return new Promise((resolve) => {
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     setTimeout(() => {
//       resolve(randomNumber);
//     }, 3000);
//   });
// };
// Promise.all([getRandom(), getRandom1()]).then((num) => {
//     console.log(num)
//     console.log(num[0]+num[1])
// });

// ///////////////////////////////////////////////////////

////////////////////// Ex.4 ///////////////////////////

// let getMyCordinates = () => {
//   return new Promise((resolve, reject) => {
//    setTimeout(() => {
//     if (navigator.geolocation) {
//         resolve(navigator.geolocation.getCurrentPosition(showPosition));
//       } else {
//         reject("Geolocation is not supported by this browser.");
//       }
//    }, 2000);

//     function showPosition(position) {
//       console.log(
//         "Latitude: " +
//           position.coords.latitude +
//           "\nLongitude: " +
//           position.coords.longitude
//       );
//     }
//   });
// };

// // getMyCordinates()
// //   .then((a) => a)
// //   .catch((b) => console.log(b));

/////////////////////////////////////////////////////////////////

//////////////////////// Ex.5 ////////////////////////////////

// let numArr = [];

// for (let i = 0; i < 20; i++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   numArr.push(randomNumber);
// }
// console.log(numArr);

// let multiplyNumbers = (num) => {
//   return new Promise((resolve) => {
//       let newNumArr = numArr.map((item) => item * num);
//       setTimeout(() => {
//       resolve(newNumArr);
//     }, 1000);
//   });
// };
// Promise.all([getMyCordinates(),multiplyNumbers(2)]).then(item => { return[
//     console.log(item[1]) , item[0]
// ] })

/////////////////////////////////////////////////////////////

// /////////////////////// Ex.1 async ////////////////////////////

// let users = [
//   { name: "Mikel", lastName: "Bugayets" },
//   { name: "Anna", lastName: "Bugayets" },
//   { name: "Thomas", lastName: "Bugayets" },
//   { name: "Charlie", lastName: "Bugayets" },
//   { name: "Sem", lastName: "Bugayets" },
// ];

// let findUserById = async (userName) => {
//   try {
//     let result = await users.find((user) => user.name === userName);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

// findUserById("Mikel").then(a=>console.log(a))

// ///////////////////////////////////////////////////////////////////

// ////////////////////////// Ex.2 async //////////////////////////

// let numArr = [];

// for (let i = 0; i < 20; i++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   numArr.push(randomNumber);
// }

// let getNumbers = async (num) => {
//   try {
//     let fillteredNumbers = await numArr.filter((number) => number > num);
//     return fillteredNumbers;
//   } catch (err) {
//     console.log(err);
//   }
// };

// getNumbers(34).then((a) => console.log(a));

// ////////////////////////////////////////////////////////////

// let getLocation = () => {
//   let geolocation = navigator.geolocation;
//   geolocation.getCurrentPosition(showLocation, errorHandler);
// };

// let showLocation = (position) => {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   console.log(latitude, longitude);
// };

// let errorHandler = (err) => {
//   if (err.code == 1) {
//     console.log(err.code, err);
//   }
// };

// ///////////////////////////////////////////////////////

// let someFunction = ({ name, age, color, country }) => {
//   console.log(name, age, color, country);
// };

// someFunction({ name: "mikel", age: 12, color: "red", country: "israel" });

// ////////////////////////////////////////////////////////////