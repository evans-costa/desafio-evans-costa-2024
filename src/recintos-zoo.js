import recintos from "./recintos.js";
import animais from "./animais.js";

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) return { erro: "Quantidade inválida" };

    const getAnimal = animais.find((element) => element.especie === animal);

    if (!getAnimal) {
      return { erro: "Animal inválido" };
    }

    const sumSizeOfAnimal = getAnimal.tamanho * quantidade;
    let result = { recintosViaveis: [] };

    for (let recinto of recintos) {
      if (!this.isRecintoViavel(recinto, getAnimal, quantidade)) continue;

      let espacoLivre = recinto.espaço_livre();

      if (recinto.animais.length !== 0 && !recinto.animais.includes(getAnimal.especie)) {
        --espacoLivre;
      }

      if (
        espacoLivre >= sumSizeOfAnimal &&
        recinto.bioma.some((element) => getAnimal.bioma.includes(element))
      ) {
        result.recintosViaveis.push(
          `Recinto ${recinto.numero} (espaço livre: ${espacoLivre - sumSizeOfAnimal} total: ${
            recinto.tamanho_total
          })`
        );
      }
    }

    return result.recintosViaveis.length === 0 ? { erro: "Não há recinto viável" } : result;
  }

  isRecintoViavel(recinto, animalInfo, quantidade) {
    if (recinto.animais.length !== 0) {
      if (animalInfo.isCarnivore && !recinto.animais.includes(animalInfo.especie)) return false;
      if (!animalInfo.isCarnivore && this.hasCarnivores(recinto)) return false;
    }

    if (animalInfo.especie === "MACACO" && quantidade === 1 && recinto.animais.length === 0) {
      return false;
    }

    if (
      animalInfo.especie === "HIPOPOTAMO" &&
      recinto.animais.length !== 0 &&
      !["savana", "rio"].every((bioma) => recinto.bioma.includes(bioma))
    ) {
      return false;
    }

    return true;
  }

  hasCarnivores(recinto) {
    return recinto.animais.some((animalRecinto) => {
      const animalInfo = animais.find((animal) => animal.especie === animalRecinto);

      return animalInfo && animalInfo.isCarnivore;
    });
  }
}

export { RecintosZoo as RecintosZoo };
