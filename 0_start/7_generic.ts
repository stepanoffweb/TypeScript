const arrayOfNumbers = Array<number> = [1, 2, 3];
const arrayOfStrings = Array<string> = ['Hello', 'Vlad'];

function reverse<T>(array: T[]): T[] { // динамически подстраивыаемый тип
  return array.reverse();
}

reverse(arrayOfStrings);
reverse(arrayOfNumbers);
