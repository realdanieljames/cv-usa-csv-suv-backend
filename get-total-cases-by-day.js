//give me a date string
// give me a 2D Array
// i give the total number of cases for that day
//search each day
//who has the total number of cases - csv [4]
// loop through each ROW of data
// Use getDate 
//Use getTotalCases
const getDate = require('./get-date.js')
const getTotalCases = require('./get-total-cases.js')

const getTotalCasesByDay = function (date, twoDimensionalArray){
  totalCasesForThatDay = 0
  for(const item of twoDimensionalArray){
    let total = getTotalCases(item)
    
    if(item.includes(date)){
      result = totalCasesForThatDay + total
    }
    
  }
  return result 

}




if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
