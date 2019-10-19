import { Fila } from './fila.js'
import { No } from '../no/no.js'
let f = new Fila;

var app = new Vue({
    el: '#app',
    data: {
        nome : '',
        topo: f.mostrarElemento()
    },
    methods:{
        adicionar: function (event){
            f.adicionar(new No(this.nome));
            this.topo = f.mostrarElemento()
            console.log(f.tamanho)
        }
    }
})

console.log(f.tamanho)