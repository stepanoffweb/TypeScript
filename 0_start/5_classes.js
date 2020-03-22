var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[" + name + "]: TypeScript version is " + this.version + " ";
    };
    return TypeScript;
}());
// class Car {
//   readonly numberOfWheels: number = 4
//   readonly model: string
//   constructor(theModel: string){
//     this.model = theModel
//   }
// } all the same:
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
//========== модификаторы
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = 'myeau'; // accesible for inheritor classes
        this.color = 'black';
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
        //this.go();// error TS2341: Property 'go' is private and only accessible within class 'Animal'
    };
    Cat.prototype.getVoice = function () {
        var voice = this.voice;
        return voice;
    };
    return Cat;
}(Animal));
var cat = new Cat;
// console.log(cat.voice);//error TS2445: Property 'voice' is protected and only accessible within class 'Animal' and its subclasses
cat.setVoice('Whooee');
console.log(cat.color);
console.log(cat.getVoice());
