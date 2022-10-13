// function convertToF(celsius) {
//     let fahrenheit = celsius * (9/5) + 32;
//     return fahrenheit;
//   }
  
//   convertToF(30);

//   console.log(convertToF(30));

  function factorialize(num) {
      let fax = 1;

      for(let i = 1; i <= num; i++){
        fax *= i;
      }
      console.log(fax);
      
    return fax;
  }
  
  factorialize(5)