// give me a date string
//give me a 2-dimensional Array
// i give you new cases for that day
// loop each row
// use getDate
// use getNewCases 

const getNewCases = require('./get-new-cases.js')


const getNewCasesByDay = function(date, twoDimensionalArray){
  let newCasesForThatDay = 0
  
  for(const newCases of twoDimensionalArray){
    let cases = (getNewCases(newCases) )
    
    if(newCases.includes(date)){
      result = newCasesForThatDay + cases
    }
  }
  
  return result
}




if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
