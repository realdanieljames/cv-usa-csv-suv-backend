// give me a new-line seperated sting
// i will convert it to a 2d ARRAY
//make a new array
// split the csv string -
//loop through the array
// array.push() each string row
// use getRow function

const getRow = require('./get-row.js')

const getRows = function (newLineSeparatedString) {
  const array = []

  for (const item of newLineSeparatedString.split('\n')) {
    array.push(item.split(','))
  }

  return array

}



if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
