//Napisi funkciju koja za ulaze ++x i x++ povecava vrijednost pocetne varijable,
// a za ulaze –x i x– smanjuje vrijednost varijable za 1. Pocetna vrijednost je 0.

//Primjer:
//Ulaz: ["--X","X++","X++", “X++”]
//Izlaz: 2

const promjenaVrijednosti = (arr) => {
  let pocetnaVrijednost = 0;

  arr.forEach((str) => {
    if (str.toLowerCase() === "x++" || str.toLowerCase() === "++x") {
      pocetnaVrijednost++;
    }
    if (str.toLowerCase() === "--x" || str.toLowerCase() === "x--") {
      pocetnaVrijednost--;
    }
  });

  return pocetnaVrijednost;
};

console.log(promjenaVrijednosti(["--X", "X++", "X++", "x++"]));
