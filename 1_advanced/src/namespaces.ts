//для объединения эл-тов в группы - импорт из ./form-namespaces.ts:
///<reference path="form-namespace.ts" />

namespace Form {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'

    constructor(public email: string) {

    }

    getInfo() {
      return {
        type: this.type,
        state: this.state
      }
    }
  }
   const myForm = new MyForm('v@maiol.com')

}

