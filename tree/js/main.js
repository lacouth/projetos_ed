import { Arvore } from '../arvore/arvore.js'
import { No } from '../no/no.js'

const btn = document.querySelector('#inserir')
const input = document.querySelector('#input')
const arvore = new Arvore()


btn.addEventListener('click',()=>{
  const value = input.value
  let no = new No(parseInt(value))
  arvore.inserir(no)
  
  let treeData = [arvore.getJSON()]
  console.log(arvore.emLargura())
  let root = treeData[0];
  root.x0 = height / 2;
  root.y0 = 0;

  update(root);

  input.value = ""
})