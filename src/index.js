const array1 = [0, 1, 2, 3, 4, 5];

const newArray1 = array1.filter((output, index) => {
  return output > 3;
});

//console.log(newArray1);

const array2 = ['joker', 'mona', 'skull', 'panther', 'fox'];

const newArray2 = array2.filter((output, index) => {
  return output === "mona";
});

//console.log(newArray2);

const array3 = ['joker', 'mona', 'skull', 'panther', 'fox'];

const newArray3 = array3.filter((output, index) => {
  return output.length > 4;
});

console.log(newArray3);
