const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfStrings: Array<string> = ['Hello', 'Vlad'];

function reverse<T>(array: T[]): T[] { // динамически подстраиваемый тип
  return array.reverse();
}

reverse(arrayOfStrings);
reverse(arrayOfNumbers);
// них не понял, есть any типы
// !к имени функции <T> - указываем тип параметров, иначе - error TS2304: Cannot find name 'T'
