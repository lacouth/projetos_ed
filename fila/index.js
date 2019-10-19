import { Fila } from './fila.js'
import { No } from '../no/no.js'
let f = new Fila(new No("Patric Lacouth"))
f.adicionar(new No(1))

var app = new Vue({
    el: '#app',
    data: {
        message: f.mostrarElemento()
    }
})

console.log(f.tamanho)