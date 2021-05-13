class TypeScript {
  version: string
  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version} `
  }
}
// class Car {
//   readonly numberOfWheels: number = 4
//   readonly model: string
//   constructor(theModel: string){
//     this.model = theModel // перезаписать можем только в конструкторе! TS позволяет
//   }
// }// all the same:
class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string){}
}

//========== модификаторы полей
class Animal {
  protected voice: string = 'myeau'; // accesible for inherited classes - access in instances via set/get only
  public color: string = 'black';

  constructor() {
  this.go() // теперь ходят все животные и мы не можем их остановить - нет доступа в подклассах и инстансах
  }

  private go(): void { // accessible in the class ONLY
    console.log('Go');
  }
}
class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  //this.go();// error TS2341: Property 'go' is private and only accessible within class 'Animal'
  }
  getVoice() {
    let voice = this.voice;
    return voice;
  }
}
const cat = new Cat;
console.log(cat.voice);//error TS2445: Property 'voice' is protected and only accessible within class 'Animal' and its subclasses
cat.setVoice('Whooee');
console.log(cat.color);// black
console.log(cat.getVoice());// Whooee

//=============== абстрактные классы ни во что не компилятся
abstract class Component {
  abstract render(): void
  abstract info(): string
}
class appComponent extends Component {
  render(): void {
    console.log('Component on render');
  }
  info(): string {
    return 'This is info';
  }
}













