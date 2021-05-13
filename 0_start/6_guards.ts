//  если я правильно понял, контролируются типы параметров функций и меняется логика. в чем принципиальность - хз
function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim().toUpperCase();
}
//===========
class MyResponse {
  header = 'response header';
  result = 'response result'
}
class MyError {
  header = 'error header';
  message = 'error message'
}

function handle(res: MyResponse | MyError) {  // ? классы - не типы и не интерфейсы...
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}
//===========
type AlertType = 'success' | 'warning' | 'danger'
function setAlertType(type: AlertType) {
  //...
}
setAlertType('success');
setAlertType('default'); //error TS2345: Argument of type '"default"' is not assignable to parameter of type 'AlertType'

