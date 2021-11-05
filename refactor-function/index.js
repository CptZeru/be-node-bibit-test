function refactoredFindStringInBracket(str) {
  if(str.length <= 0) 
  	return '';
  const indexFirstBracketFound = str.indexOf("(");
  if(indexFirstBracketFound < 0) 
  	return '';
  let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
  if(!wordsAfterFirstBracket) 
  	return '';
  wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
  const indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
  if(indexClosingBracketFound < 0)
  	return ''
  return wordsAfterFirstBracket.substring(0,indexClosingBracketFound);
}

const str = 'outside(inside)';
const strInBracket = refactoredFindStringInBracket(str);
console.log(strInBracket);
