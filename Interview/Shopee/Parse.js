// '[1,[2,3],4]' => [1,[2,3],4]

function parse1 (str) {
  let arr1, arr2 = [[], []];
  if (str.includes('[')) {
    arr1 = str.substring(1, str.length - 1);
    arr2 = arr1.split(/\,\[|\]\,/);
  } else {
    arr2 = str.split(',');
  }
  console.log('arr1', arr1);
  console.log('arr2', arr2);
  let arr3 = [];
  arr2.forEach(s1 => {
    if (s1.includes(',')) {
      arr3.push(parse1(s1));
    } else {
      arr3.push(Number(s1));
    }
  });
  return arr3;
}

const ppp = parse1('[1,[2,3],4]');

console.log('ppp', ppp);

// console.log('test', '1,2,3'.split(','));

/*
  article https://lihautan.com/json-parser-with-javascript/
  [ new Array begin
  ] new Array end
  [ new value
  , new value

*/
// [ new Array begin
// 
