function findElement(arr, func) {

    let num = 0;

    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];
        
        if (func(currentNum) == true)  {
            console.log(currentNum);
            return currentNum
        }
        
    }

    return undefined;
  }
  
  findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0); 