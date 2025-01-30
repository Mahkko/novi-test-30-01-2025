//Napisi funkciju koja izbacuje svaki drugi najmanji element niza, i
// ubacuje u novi niz. Pretpostaviti da su elementi u nizu unikatni.
//Primjer:
//Ulaz: [5, 1, 9 , 3, 7 ,2]
//Izlaz: [2, 5, 9]

const izbacivanjeSvakogDrugog = (arr) => {
  let removedElements = [];
  let leftoverElements = [];
  arr.sort((a, b) => a - b);
  arr.forEach((num, i) =>
    i % 2 !== 0 ? removedElements.push(num) : leftoverElements.push(num)
  );
  return removedElements;
};

console.log(izbacivanjeSvakogDrugog([5, 1, 9, 3, 7, 2]));
