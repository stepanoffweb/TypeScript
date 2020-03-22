var rect1 = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    }
};
rect1.color = '#fff';
//rect1.id = '54321';//error TS2540: Cannot assign to 'id' because it is a read-only property
console.log(rect1);
//приведение к типу - два варианта:
var rect2 = {};
var rect3 = {};
var rect4 = {
    id: '43',
    size: {
        width: 35,
        height: 45
    },
    getArea: function () {
        // console.log(this.size.width * this.size.height);//error TS2355: A function whose declared type is neither 'void' nor 'any' must return a value
        return this.size.width * this.size.height;
    }
};
console.log(rect4.getArea());
//============== взаимодействие с классами
