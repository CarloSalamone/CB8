//Ex 1

//Definizione della funzione
function getTemperatureStatus(actualTemp) {
  if (actualTemp <= 5) {
    return "fredda";
  } else if (actualTemp >= 6 && actualTemp <= 25) {
    return "mite";
  } else if (actualTemp >= 26) {
    return "calda";
  } else {
    return "Inserire un valore valido";
  }
}

let actualTemp = prompt("Inserire la temperatura in gradi");
console.log("oggi la temperaura é" + getTemperatureStatus(actualTemp));

//Ex 2

//Creo un oggetto
const person = {
  name: "Carlo",
  surname: "Salamone",
  birthDay: 24,
  birthMonth: "maggio",
  birthYear: 2004,
  info: function () {
    return (
      "Il mio nome è" +
      this.name +
      "e il mio cognome è " +
      this.surname +
      ", e sono nato il " +
      this.birthDay +
      " " +
      this.birthMonth +
      " del " +
      this.birthYear +
      "."
    );
  },
};

console.log(person.info());
