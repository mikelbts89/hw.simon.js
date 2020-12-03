// /////////////////// Ex.1 /////////////////////////

// let users = [
//   { name: "Mikel" },
//   { name: "Anna" },
//   { name: "Thomas" },
//   { name: "Charlie" },
//   { name: "Sem" },
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

// ////////////////////// Ex.4 ///////////////////////////

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

// getMyCordinates()
//   .then((a) => a)
//   .catch((b) => console.log(b));

// /////////////////////////////////////////////////////////////////

// //////////////////////// Ex.5 ////////////////////////////////

// let numArr = [];

// for (let i = 0; i < 20; i++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   numArr.push(randomNumber);
// }
// console.log(numArr);

// let multiplyNumbers = (num) => {
//   return new Promise((resolve) => {
//     let newNumArr = numArr.map((item) => item * num);
//     setTimeout(() => {
//       resolve(newNumArr);
//     }, 1000);
//   });
// };

// Promise.all([getMyCordinates(),multiplyNumbers(2)]).then(item => console.log(item[0],item[1]))

// ////////////////////////////////////////////////////////////////