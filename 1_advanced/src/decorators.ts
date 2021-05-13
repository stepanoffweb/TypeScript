// function Log(constructor: Function) {
//   console.log(constructor); //class Component {} вызван, хотя инстанс не создан
// }
// function Log2(target: any, propName: string | Symbol) {
// }
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
// }
interface ComponentDecorator {
  selector: string
  template: string
}
function Component(config: ComponentDecorator) {
  return function <T extends {new(...args: any[]): object}>(Constructor: T) {
    return class extends Constructor {
      constructor (...args: any[]) {
        super(...args);

        const el = document.querySelector(config.selector)!
        el.innerHTML = config.template;
      }
    }
  }
}
function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value
  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this)//привязали функцию logName к инстансу класса CardComponent через декоратор Bind
    }
  }
}

// @Log
@Component({
  selector: '#card',
  template: `
  <div class="card">
    <div class="card-content">
      <span class="card-title">Card Component</span>
    </div>
  </div>`
})
class CardComponent {
  // @Log2
  // name: string;
  constructor(public name: string) {
    // this.name = name;
  }
  // @Log3
  // get componentName() {
  //   return this.name;
  // }

  // @Log3
  @Bind
  logName(): void {
    console.log(`Component name: ${this.name}`);
  }
}

const card = new CardComponent('My Card Component');// при создании инстанс размещает в DOM шаблон, переданный через декоратор
const btn = document.querySelector('#btn')!;
// btn.addEventListener('click', card.logName.bind(card));
btn.addEventListener('click', card.logName);

//===============
type ValidatorType = 'required'|'email'
interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType
  }
}

const validators:ValidatorConfig = {}; // импровизированная локальная база данных

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: 'required'
  } // ключ = имя класса
}

function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name]
  if (!objConfig) {
    return true
  }
  let isValid = true
  Object.keys(objConfig).forEach(key => {
    if(objConfig[key] === 'required') {
      isValid = isValid && !!obj[key]
    }
  })
  return isValid
}

// class Form {
//   @Required
//   public email: string | void
//   constructor(email?: string) {
//     this.email = email;
//   }
// }
// const form = new Form('v&mail')
// if (validate(form)) {
//   console.log('Valide:', form)
// } else {
//   console.log('Validation Error')
// }
























