// const promise: Promise<number> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(42)
//   }, 1000);
// });
// promise.then(data => {
//   console.log(data.toFixed());
// });
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
var merged = mergeObjects({ name: 'Piotr' }, { age: 26 });
console.log(merged); // без указания произвольных типов объектов их ключи - недоступны для компилятора = Error
function withCount(value) {
    return {
        value: value,
        count: "\u0412 \u044D\u0442\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u0435 " + value.length + " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
    };
}
console.log(withCount('Hello, huilo!!!')); //{value: "Hello, huilo!!!", count: "В этом объекте 15 символов"}
console.log(withCount(['I', 'am', 'Array'])); //value: Array(3), count: "В этом объекте 3 символов"}
//==============
function getObjectValue(obj, key) {
    return obj[key];
}
var person = {
    name: 'Polly',
    age: 35
};
console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'job'));//error TS2345: Argument of type '"job"' is not assignable to parameter of type '"name" | "age"'
//==============
var Collection = /** @class */ (function () {
    function Collection(_items) {
        if (_items === void 0) { _items = []; }
        this._items = _items;
    }
    Collection.prototype.add = function (item) {
        this._items.push(item);
    };
    Collection.prototype.remove = function (item) {
        this._items = this._items.filter(function (i) { return i !== item; });
    };
    Object.defineProperty(Collection.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    return Collection;
}());
var strings = new Collection(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
function createAndValidateCar(model, year) {
    var car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
//=============
