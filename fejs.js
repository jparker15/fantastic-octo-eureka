// function convertToF(celsius) {
//     let fahrenheit = celsius * (9/5) + 32;
//     return fahrenheit;
//   }
  
//   convertToF(30);

//   console.log(convertToF(30));

  // function factorialize(num) {
  //     let fax = 1;

  //     for(let i = 1; i <= num; i++){
  //       fax *= i;
  //     }
  //     console.log(fax);
      
  //   return fax;
  // }
  
  // factorialize(5)
 //Return the length of the longest word in the provided sentence.
  function findLongestWordLength(str) {
    str = str.split(" ");
    let longest = '';
    for(let i = 0; i < str.length; i++){
      if(str[i].length > longest.length){
        longest = str[i]
      }
    }

    console.log(longest);
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");