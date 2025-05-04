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

type TypeSecond = {
  first: string;
};

type TypeFirst = {
  first: string;
} & TypeSecond;

// декораторы

function logClass(constructor: Function) {
  console.log(constructor.name);
}

@logClass
class Plane {
  constructor(id: number) {}
}

// НОВЫЙ КУРС: typeof для null в js дал бы object / void это тип в котором нету return

enum a {
  a,
  b,
  c,
  d,
}
a.a;
a.b;
a.c;
a.d;

// тип NEVER

enum link {
  youtube = "youtube.com",
  google = "google.com",
}

console.log(link.youtube);
console.log(link.google);

// Function with to required arguments

const createPassword1 = (name: string, age: number): string => `${name}${age}`;

// Function with optional arguments

const createPassword2 = (name: string, age?: number): string => `${name}${age}`;

// object - у них ест ь типы для содержимово:

const object1: { name: string; age: number } = { name: "Azamat", age: 11 };
const object2: { name: string; age: number } = { name: "Yulai", age: 15 };

// тут у них однаковые { name: string; age: number } тогда мы лучше сделаем так:

type Person = { name: string; age: number };
const newobject1: Person = { name: "Azamat", age: 11 };
const newobject2: Person = { name: "Yulai", age: 15 };

// тут есть еще и ? то есть необязательный парметр:

type newPerson = { name: string; age: number; LichessRating?: string };
const newObject1: newPerson = { name: "Azamat", age: 11, LichessRating: "120" };
const newObject2: newPerson = { name: "Yulai", age: 15, LichessRating: "1600" };

// классы(долг штука)

class User1 {
  public name: string;
  public nickName: string;
  public age: number;
  public pass: number;
  constructor(name: string, nickName: string, age: number, pass: number) {
    this.name = name;
    this.nickName = nickName;
    this.age = age;
    this.pass = pass;
  }
}

const Charles = new User1("Charles", "Charles The Great", 55, 1234);

console.log(Charles.nickName);

// классы(быстр штука)

class User2 {
  constructor(
    public name: string,
    public nickName: string,
    public age: number,
    public pass: number
  ) {}
}

const Charles2 = new User2("Charles", "Charles The Great", 55, 1234);
console.log(Charles2.nickName);

// модификаторы доступа: public, prvate, protected, readonly.
// PUBLIC - все для всех
// PRIVATE - только в классе
// PROTECTED - класс и наследник
// READONLY - читать для всех

// что бы не делать глобальные перменные надо выделить namespace
//

namespace names {
  export let a1: string = "a";
}

console.log(names.a1);

// interface

interface firstInter {
  readonly a2: string;
}

let a2: firstInter = {
  a2: "Max",
};

// a2.a2 = "Maximilian" - ошибка

interface secondInterface {
  name: string;
}

const news: secondInterface = {
  name: "Maximilian",
  // age: 50 - ошика ибо это не входит в interface
};

// но можно так:

interface newInterface {
  name: string;
  [propName: string]: any;
}

const news2: newInterface = {
  name: "Maximilian",
  age: 50, // ошибки нету
  ages: 1, // ошибки нету
};
// interface с class и implements

interface one {
  name: string;
}
interface two {
  age: number;
}
class one implements one, two {
  name = "Maximilian";
  age = 30;
}

// generic - типы в общем видеs
// декоратор это обычная функция

// utility types:

interface user {
  name: string;
}
const newuser: Readonly<user> = {
  name: "Maximilian I",
};

// user.name = "Max" - ошибка потому что Readonly
