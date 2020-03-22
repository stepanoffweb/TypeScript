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
console.log(rect1);
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
// console.log(rect4.getArea());
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
  [key: string]: string
}
const css: Styles = {
  border: '1px solid red',
  margin: '50px',
  display: 'flex'
}
//==============













