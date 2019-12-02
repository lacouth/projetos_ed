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
const btn_id = document.querySelector('#ordenarPorId')
const btn_titulo = document.querySelector('#ordenarPorTitulo')
const btn_busca_id = document.querySelector('#buscar_id')
const btn_busca_ano = document.querySelector('#buscar_ano')



const arvore = new Arvore()


btn.addEventListener('click',()=>inserirNo())
document.addEventListener('keyup',(event)=>{
  if( event.key === 'Enter'){
    return inserirNo()
  }
})

btn_id.addEventListener('click',()=>atualizarListaDeFilmesPorId())
btn_titulo.addEventListener('click',()=>atualizarListaDeFilmesPorTitulo())
btn_busca_id.addEventListener('click', ()=>buscarPorId())
btn_busca_ano.addEventListener('click',()=>buscarPorAno())

btn_balancear.addEventListener('click',()=>{
  arvore.balancearArvore()
  atualizarArvore()
})

function atualizarArvore(){

  let treeData = [arvore.getJSON()]
  let root = treeData[0];
  root.x0 = height / 2;
  root.y0 = 0;

  update(root);

  input.value = ""
  input_ano.value = ""
  input_id.value = ""
  input.focus()
  level.innerHTML = arvore.getAltura(arvore.raiz)
  atualizarListaDeFilmesPorId()

}

function inserirNo(){

  const nome = input.value
  const ano = input_ano.value
  const id =  input_id.value
  let no = new No(new Filme(nome,ano,id))
  arvore.inserir(no,(a,b)=>parseInt(a.dado.id)>parseInt(b.dado.id))
  atualizarArvore()
  atualizarListaDeFilmesPorId()
  
}

function atualizarListaDeFilmes(nos){
  let lista = ''
  for(let no of nos){
    lista+= `<li> ${no.titulo} - ${no.ano} - ${no.id}</li>`
  }
  ul.innerHTML = lista
}

function atualizarListaDeFilmesPorId(){
  const nos = arvore.listaDeNosEmOrdem
  atualizarListaDeFilmes(nos)
}

function atualizarListaDeFilmesPorTitulo(){
  const nos = arvore.listaDeNosEmOrdem.sort((a,b)=> a.titulo>b.titulo ? 1 : -1)
  console.log(nos)
  atualizarListaDeFilmes(nos)
}

function buscarPorId(){
  const id = document.querySelector('#id').value
  const p = document.querySelector('p')
  const no = arvore.buscarPorId(parseInt(id))
  if (no != -1){
    p.innerHTML = `${no.titulo} - ${no.ano} - ${no.id}`
  }else{
    p.innerHTML = 'Filme não encontrado'
  }
  document.querySelector('#id').value = ''
}

function buscarPorAno(){
  const ano = document.querySelector('#ano').value
  const resultados = arvore.buscarPorAno(parseInt(ano))
  
  if( resultados.length > 0){
    let string = ''
    for(let no of resultados){
      string+= `<li>${no.titulo} - ${no.ano} - ${no.id}</li>`
    }
    document.querySelector('#resultado_busca_ano').innerHTML = string
  }else{
    document.querySelector('#resultado_busca_ano').innerHTML = "Ano sem filmes cadastrados"
  }

  document.querySelector('#ano').value = ''
  

}