//Napisi funkciju koja za kvadratnu matricu, vraca sumu brojeva na dijagonalama.
//Primjer:
//Ulaz: [[1,2,3], [4,5,6], [7,8,9]]
//Izlaz: 25 (1 + 5 + 9 + 3 + 7)

const matrix = [
  [1, 2, 3], //00 01 02
  [4, 5, 6], //10 11 12
  [7, 8, 9], //20 21 22
];

const diagonalSum = (matrix) => {
  let sum = 0;
  matrix.forEach((arr, i) => {
    sum += arr[i];
  });
  return sum;
};

console.log(diagonalSum(matrix));
