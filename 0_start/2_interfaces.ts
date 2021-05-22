interface IRect {
  readonly id: string
  color?: string //необязательный параметр
  size: {
    width: number
    height: number
  }
}

const rect1: IRect = {
  id: '12345',
  size: {
    width: 20,
    height: 30
  }
}
rect1.color = '#fff';
//rect1.id = '54321';//error TS2540: Cannot assign to 'id' because it is a read-only property
//приведение к типу - два варианта:
const rect2 = {} as IRect;
const rect3 = <IRect>{};
//============= наследование интерфейсов
interface IRectWithArea extends IRect {
  getArea: () => void
}
const rect4: IRectWithArea = {
  id: '43',
  size: {
    width: 35,
    height: 45
  },
  getArea(): void { // : number (переопределяем заданный в интерфейсе тип возвращаемых данных)
    console.log(this.size.width * this.size.height);//error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value
    // return this.size.width * this.size.height;
  }
}
rect4.getArea();
//============== взаимодействие с классами
interface IClock {
  time: Data
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date;
  setTime(date: Date): void {
    this.time = date;
  }
}

//==============
interface IStyles {
  [key: string]: string // динамическая типизация ключей
}
const css: IStyles = {
  border: '1px solid red',
  margin: '50px',
  display: 'flex'
}
// ======== Type Assertion (considered harmful!) in compile time  vs Type custing (runtime)
interface Foo {
    bar: number;
    bas: string;
}
var foo = {} as Foo;
// ahhhh .... forget something? ! the compiler will not protect you from forgetting to actually add the properties you promised
foo.bar = 123;
foo.bas = 'hello';
var foo = <Foo>{
    // the compiler will provide autocomplete for properties of Foo. But it is easy for the developer to forget adding all the properties
    // Also this code is likely to break if Foo gets refactored (e.g. a new property added)?? для этого и делают - в одном месте поменял, везде покажет
};
//  if you forget a property the compiler will not complain. It is better if you do the following:
var foo: Foo = {
    // the compiler will provide AUTOCOMPLETE for properties of Foo
};
