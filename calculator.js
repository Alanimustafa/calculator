let calculation = "";
let value= '';
let screen = document.querySelector('.calResultDigits');

// This function is to calculate the result and return the  
function updateCalculation (value) {
  screen.append(value);
  calculation += value ;
  console.log(calculation);
  return calculation; 
  
}

//Thei function is to update the final Results on the screen.
function resultsOutPut (calculation) {
  screen.innerText = '';
  screen.append(calculation);
}




