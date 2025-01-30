//Napisi funkciju koja za date rijeci i prefix, vraca rijeci koje imaju taj prefix.

//Primjer:
//Ulaz: words = ["pay","attention","practice","attend"], prefix = "at"
//Izlaz: [“attention”, “attend”]

const includesPrefix = (words, pref) => {
  let samePref = [];
  let prefix = pref.split("");

  prefix.forEach((letter, i) => {
    words.forEach((word) => {
      if (letter === word[i]) {
        if (samePref.includes(word)) return;

        samePref.push(word);
      }
    });
  });
  console.log(samePref);
};

includesPrefix(["atpayat", "attention", "practice", "attend"], "at");
