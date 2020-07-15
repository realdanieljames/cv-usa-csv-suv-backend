//give me a row array, i will give you the date from that row
//where is the date
const getDate = function (row){

  return row[3]
}



if (typeof getDate === 'undefined') {
  getDate = undefined;
}


module.exports = getDate;
