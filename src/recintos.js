import calculateSpace from "./calculateSpace.js";

const calcularEspacoLivre = function () {
  const sizeOfAnimals = calculateSpace(this.animais);
  return this.tamanho_total - sizeOfAnimals;
};

const recintos = [
  {
    numero: 1,
    bioma: ["savana"],
    tamanho_total: 10,
    espaço_livre: calcularEspacoLivre,
    animais: ["MACACO", "MACACO", "MACACO"],
  },
  {
    numero: 2,
    bioma: ["floresta"],
    tamanho_total: 5,
    espaço_livre: calcularEspacoLivre,
    animais: [],
  },
  {
    numero: 3,
    bioma: ["savana", "rio"],
    tamanho_total: 7,
    espaço_livre: calcularEspacoLivre,
    animais: ["GAZELA"],
  },
  {
    numero: 4,
    bioma: ["rio"],
    tamanho_total: 8,
    espaço_livre: calcularEspacoLivre,
    animais: [],
  },
  {
    numero: 5,
    bioma: ["savana"],
    tamanho_total: 9,
    espaço_livre: calcularEspacoLivre,
    animais: ["LEAO"],
  },
];

export default recintos;
