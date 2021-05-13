// const promise: Promise<number> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(42)
//   }, 1000);
// });
// promise.then(data => {
//   console.log(data.toFixed());
// });


function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}
const merged = mergeObjects({name: 'Piotr'}, {age: 26});
console.log(merged);// без указания произвольных типов объектов их ключи - недоступны для компилятора = Error

//=============
interface ILength {
  length: number
 }

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `В этом объекте ${value.length} символов`
  }
}

console.log(withCount('Hello, !!!'));//{value: "Hello!!!", count: "В этом объекте 15 символов"}
console.log(withCount(['I', 'am', 'Array']));//value: Array(3), count: "В этом объекте 3 символов"}

//==============
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}
const person = {
  name: 'Polly',
  age: 35
}
console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'job'));//error TS2345: Argument of type '"job"' is not assignable to parameter of type '"name" | "age"'

//==============
class Collection<T extends number | string | boolean> { // запрещаем коллекции объектов, ибо одинаковые объекты имеют разные ссылки и remove не отработает
  constructor(private _items: T[] = []) {}
  add(item: T) {
    this._items.push(item);
  }
  remove(item: T) {
    this._items = this._items.filter(i => i !== item);
  }
  get items(): T[] {
    return this._items;
  }
}
const strings = new Collection(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);

//============== утилита Partial
interface Car {
  model: string
  year: number
}
function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};
  if (model.length > 3) {
    car.model = model;
  }
  if (year > 2000) {
    car.year = year;
  }
  return car as Car;
}

//============= Защита от перезаписи элементов массивов и объектов, которые определены как const:
const cars: Readonly<Array<string>> = ['Ford', 'Audi'];
//cars.shift();//error TS2339: Property 'shift' does not exist on type 'readonly string[]'

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}
//ford.model = 'Ferrary';//error TS2540: Cannot assign to 'model' because it is a read-only property
