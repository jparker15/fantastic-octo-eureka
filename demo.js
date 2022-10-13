// function convertCtoF(celsius) {
//     let fahrenheit = celsius * (9/5) + 32;

//     console.log(fahrenheit);

//     return fahrenheit;
//   }
  
//   convertCtoF(-30);

  function reverseString(str) {

        let a = "";
        str = str.split("");

      for(let i = str.length - 1; i >= 0; i--){
            a += str[i];
      }
        // console.log(a);
        return a;
  }
  
  reverseString("hello");