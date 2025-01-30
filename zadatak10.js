/* Napiši funkciju jeAritmetickiNiz(niz), koja provjerava da li su brojevi u nizu raspoređeni 
u aritmetičkom nizu (gdje je razlika između svakog uzastopnog para brojeva ista).

	Ulaz: 
	
	console.log(jeAritmetickiNiz([2, 4, 6, 8, 10]));
console.log(jeAritmetickiNiz([3, 6, 9, 15]));

	Izlaz: 
	
	true
false
*/

const isArithmetic = (arr) => {
  arr.sort((a, b) => a - b);
  let difference = arr[1] - arr[0];

  let isArithmetic = false;

  for (let i = 1; i < arr.length - 1; i++) {
    if (difference + arr[i] === arr[i + 1]) {
      isArithmetic = true;
    } else {
      isArithmetic = false;
    }
  }
  return isArithmetic;
};

console.log(isArithmetic([3, 6, 9, 15]));
