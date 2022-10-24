// // function convertCtoF(celsius) {
// //     let fahrenheit = celsius * (9/5) + 32;

// //     console.log(fahrenheit);

// //     return fahrenheit;
// //   }
  
// //   convertCtoF(-30);

// //   function reverseString(str) {

// //         let a = "";
// //         str = str.split("");

// //       for(let i = str.length - 1; i >= 0; i--){
// //             a += str[i];
// //       }
// //         // console.log(a);
// //         return a;
// //   }
  
// //   reverseString("hello");

// function largestOfFour(arr) {
//     // console.log(arr[0].length);
//     let dem = [];

//     for(let i = 0; i < arr.length; i++){
//       let max = arr[i][0];

//       for(let j = 0; j < arr[0].length; j++){
//          let currentNum = arr[i][j];

//           if (max < currentNum) max = currentNum; 

          
//         }
//         dem.push(max);
//       }
//       console.log(dem);
//       return dem;
//     }
    
//     largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// function confirmEnding(str, target) {
//     let arr = str.split("");
//     let demo = [];
    
//     for(let i = target.length; i > 0; i--){
//       demo.push(arr[i]);
//     }

    
// }

// confirmEnding("Congratulation", "on")

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);