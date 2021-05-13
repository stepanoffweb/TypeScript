// новые операторы - keyof|Exclude|Pick
interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person;
let key: PersonKeys = 'name';
key = 'age';
// key = 'job'; //error TS2322: Type '"job"' is not assignable to type '"name" | "age"'

//==========
type User = {
  __id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '__id' | 'createdAt'>
type UserKeysNoMeta2 = Pick<User, 'email' | 'name'>

let u1: UserKeysNoMeta1 = 'name';
u1 = '__id'; //error TS2322: Type '"__id"' is not assignable to type '"name" | "email"'
