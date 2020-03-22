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
//     this.model = theModel
//   }
// } all the same:
class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string){}
}
//========== модификаторы
class Animal {
  protected voice: string = 'myeau'; // accesible for inheritor classes
  public color: string = 'black';

  constructor() {
  this.go()
}

  private go(): void { // accessible in their class ONLY
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
// console.log(cat.voice);//error TS2445: Property 'voice' is protected and only accessible within class 'Animal' and its subclasses
cat.setVoice('Whooee');
console.log(cat.color);
console.log(cat.getVoice());
// black
// Whooee
//=============== абстрактные классы
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













