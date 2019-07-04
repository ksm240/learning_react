const array1 = [0, 1, 2, 3, 4];

const newArray1 = array1.map((output, index) => {
  return `${index}番目は${output}です。`;
});

//console.log(newArray1);

const array2 = ["joker", "skull", "panther", "fox", "queen"];

const newArray2 = array2.map((output, index) => {
  return `${index}番目は${output}です。`;
});

console.log(newArray2);
