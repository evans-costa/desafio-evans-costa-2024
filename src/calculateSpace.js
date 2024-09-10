import animais from "./animais.js";

export default function calculateSpace(listOfAnimals) {
  if (listOfAnimals.length === 0) return 0;

  let spaceOccupied = 0;

  for (let animal of listOfAnimals) {
    let findAnimal = animais.find((element) => element.especie === animal);

    spaceOccupied += findAnimal.tamanho;
  }

  return spaceOccupied;
}
