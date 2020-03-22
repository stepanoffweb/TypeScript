// const str: string = 'Hello!!!';
// console.log(str);

let int: number = 55;
int = 4.5;
int = 3e10;
const numArray: number[] = [1,1,2,3,5,8,13]
const numArray2: Array<number> = [1,1,2,3,5,8,13]// Generic
const words : string[] = ['Hello', ', ', 'TypeScript', '!!!']

//Tuple
const contact: [string, number] = ['Ivan Stepanov', 895231114662]

// Any
let variable: any = 345;
variable = 'Something';

//Funtion
function sayMyName(name: string): void {// void == не возвращает ничего`
  console.log(name);
}
sayMyName('Not Heisenberg');

//Never
//1. функция возвращает ошибку
//2. Ф-ция постоянно что-то делает (?)
function throwError(message: string): never {
  throw new Error(message);
}
// function infinite(): never {
//   while(true) {
//   }
// }

//Type
type Login = string;
const log1: Login = 'fucking';
//const log2: Login = 1234;//error TS2322: Type '1234' is not assignable to type 'string'
type ID = string | number;
const id1: ID = '1234';
const id2: ID = 1234;

type SomeType = string | null | undefined;
