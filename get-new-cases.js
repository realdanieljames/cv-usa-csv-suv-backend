//give me a row
// i give you NEW CASES from that row
// where is row located - index 5 in database
const getNewCases = function(row){

  return row[5]
}







if (typeof getNewCases === 'undefined') {
  getNewCases = undefined;
}


module.exports = getNewCases;
