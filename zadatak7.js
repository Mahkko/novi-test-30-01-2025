//Napiši funkciju jePalindrom(niz), koja provjerava da li se niz čita isto sprijeda i straga.

//Ulaz:

// console.log(jePalindrom([1, 2, 3, 2, 1]));
// console.log(jePalindrom([1, 2, 3, 4, 5]));

//Izlaz:
//true
//false

const arr = [1, 2, 2, 3, 3, 2, 2, 1];

const isPalindrome = (arr) => {
  let reverseArray = [];
  let isPalindrome = false;
  arr.forEach((number) => {
    reverseArray.unshift(number);
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reverseArray[i]) return false;
    return true;
  }
};

console.log(isPalindrome(arr));
