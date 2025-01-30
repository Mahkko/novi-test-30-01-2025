/*Napiši funkciju jesuAnagrami(str1, str2), koja provjerava da li su dva stringa anagrami (sadrže iste karatkere ali u drugačijem redosljedu).

	Ulaz: 

console.log(jesuAnagrami("listen", "silent"));
console.log(jesuAnagrami("hello", "world"));

	Izlaz: 
	
true
false
*/

const areAnagrams = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(areAnagrams("listen", "silent"));
