import subSubModule from './subsubmodule/subsubmodule.js'

export default function() {
  let thing = document.getElementById('thing')
  thing.innerHTML = 'woo'
  console.log(subSubModule)
}
