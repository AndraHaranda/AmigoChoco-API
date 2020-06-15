module.exports = function parseStringToArray(pString){
  return pString.toString().split(',').map( str => str.trim());
}