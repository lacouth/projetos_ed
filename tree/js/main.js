import { Arvore } from '../arvore/arvore.js'
import { No } from '../no/no.js'
import { Filme } from '../filme/filme.js'

const btn = document.querySelector('#inserir')
const input = document.querySelector('#input')
const input_ano = document.querySelector('#input_ano')
const input_id = document.querySelector('#input_id')
const level = document.querySelector('span')
const btn_balancear = document.querySelector('#balancear')
const ul = document.querySelector('ul')
const arvore = new Arvore()


btn.addEventListener('click',()=>inserirNo())
document.addEventListener('keyup',(event)=>{
  if( event.key === 'Enter'){
    return inserirNo()
  }
})

btn_balancear.addEventListener('click',()=>{
  arvore.balancearArvore()
  atualizarArvore()
  console.log(arvore.listaDeNosEmOrdem)
})

function atualizarArvore(){

  let treeData = [arvore.getJSON()]
  let root = treeData[0];
  root.x0 = height / 2;
  root.y0 = 0;

  update(root);

  input.value = ""
  level.innerHTML = arvore.getAltura(arvore.raiz)
  atualizarListaDeFilmes()

}

function inserirNo(){

  const nome = input.value
  const ano = input_ano.value
  const id =  input_id.value
  let no = new No(new Filme(nome,ano,id))
  arvore.inserir(no,(a,b)=>a.dado.titulo>b.dado.titulo)
  atualizarArvore()
  
}

function atualizarListaDeFilmes(){
  const nos = arvore.listaDeNosEmOrdem
  let lista = ''
  for(let no of nos){
    lista+= `<li> ${no.titulo} - ${no.ano} - ${no.id}</li>`
  }

  ul.innerHTML = lista

}