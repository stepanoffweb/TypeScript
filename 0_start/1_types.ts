let int: number = 55;
int = 4.5;
int = 3e10;
const numArray: number[] = [1,1,2,3,5,8,13]
const numArray2: Array<number> = [1,1,2,3,5,8,13]// Generic
const words : string[] = ['Hello', ', ', 'TypeScript', '!!!']

//Tuple -  contain multiple types, the order in which they are indexed is important
type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
  [0, "Adankwo", "adankwo.e@"],
  [1, "Kanokwan", "kanokwan.s@"],
  [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300],
];
// You can use tuples to describe functions which take an undefined number of parameters with types:

declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;

// 'Any' is the TypeScript escape clause. You can use any to either declare a section of your code to be dynamic and
// JavaScript like, or to work around limitations in the type system.
// A good case for any is JSON parsing
let variable: any = 345;
variable = 'Something';

//Function
function sayMyName(name: string): void {// void == не возвращает ничего`
  console.log(name);
}
sayMyName('Not Heisenberg');

//'Never' Because TypeScript supports code flow analysis, the language needs to be able to represent when code logically cannot
// happen. A very popular use for never, is to ensure that a switch is exhaustive. E.g., that every path is covered.
function throwError(message: string): never {
  throw new Error(message);
} // функция возвращает ошибку
function infinite(): never {
  // while(true) {
  } // Ф-ция бесконечно что-то делает
}

// 'Unknown' is one of those types that once it clicks, you can find quite a lot of uses for it. It acts like a sibling
// to the any type. Where any allows for ambiguity - unknown requires specifics.
// A good example would be in wrapping a JSON parser. JSON data can come in many different forms and the creator
// of the json parsing function won't know the shape of the data - the person calling that function should.

const jsonParser = (jsonString: string) => JSON.parse(jsonString);
const myAccount = jsonParser(`{ "name": "Dorothea" }`);
//Error не позволит выполнить, пока не определен тип входных параметров
type User = { name: string };
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;

//Type - собственные типы более удобны в конкретном проекте
type Login = string;
const log1: Login = 'goodman';
//const log2: Login = 1234;//error TS2322: Type '1234' is not assignable to type 'string'
type ID = string | number;
const id1: ID = '1234';
const id2: ID = 1234;

type SomeType = string | null | undefined;

// A 'never' is something which is automatically removed from a type union.
type NeverIsRemoved = string | never | number;
