import {helperMethod} from './helper.js';
import subModule from './submodule.js'

let extra = () => {
  console.log("I'm extra!")
}

let foo = () => {
  console.log("foo")
  helperMethod(extra);
  subModule()
}

foo()
