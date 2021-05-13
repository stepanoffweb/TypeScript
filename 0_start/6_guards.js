//  если я правильно понял, контролируются типы параметров функций и меняется логика. в чем принципиальность - хз
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim().toUpperCase();
}
//===========
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    //...
}
setAlertType('success');
setAlertType('default'); //error TS2345: Argument of type '"default"' is not assignable to parameter of type 'AlertType'
