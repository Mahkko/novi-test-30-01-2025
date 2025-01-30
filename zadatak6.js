//Napiši funkciju obrniString(tekst) koja prima string i vraća isti string obrnut koristeći petlju(HOF).

//Ulaz:

//console.log(obrniString("programiranje"));
//console.log(obrniString("javascript"));

//Izlaz:

//"ejranimargorp"
//"tpircsavaj"

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("programiranje"));
console.log(reverseString("tpircsavaj"));
