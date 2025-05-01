type TypeUser = {};
type TypeAddres = {};
const user: TypeUser = {};
const addres: TypeAddres = {};
let common: TypeUser & TypeAddres;
common = { ...user, ...addres };

let array: string[] = ["1", "2"];
let array2: Array<string> = new Array("1", "2");

const numbers: ReadonlyArray<number> = new Array(1, 2, 3);

type TypeArray = [number, string, null];
const newArray: TypeArray = [1, "2", null];

type TypeFunction = { name: string };

function functions(name: string): TypeFunction {
  return { name };
}

type TypeFunctionNew = (name: string) => TypeFunction;

const functionsNew: TypeFunctionNew = (name) => {
  return { name };
};

// перенрузки

function getCar(name: string): string;
function getCar(name: string, price: number): string;
function getCar(name: string, price?: number): string {
  return price ? `Название ${name}, Цена ${price}` : `Название ${name}`;
}

const car1 = getCar("bmw");
const car2 = getCar("bmw", 100000);
const car3 = getCar("bmw", 100000);

// классы

class Car {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getInfo(): string {
    return `${this.name} - ${this.price}`;
  }
}

new Car("BMW", 100000).getInfo();

// интерфейсы могут быть одинкаковы:

interface InterfaceFirst {
  first: string;
}

interface InterfaceFirst {
  first: string;
}

// интерфейсы могут быть соединенны:

interface InterfaceSecond {
  first: string;
}

interface InterfaceFirst extends InterfaceSecond {
  first: string;
}

// типы тоже, но подругому:
