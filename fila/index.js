import { Fila } from './fila.js'
import { No } from '../no/no.js'
let f = new Fila;

var app = new Vue({
    el: '#app',
    data: {
        nome : '',
        topo: '',
        fila : []
    },
    methods:{
        adicionar: function (event){
            f.adicionar(new No(this.nome));
            this.topo = f.mostrarElemento();
            this.fila = f.obterFilaCompleta();
            this.nome = '';
        },
        remover: function(event){
            f.remover();
            this.topo = f.mostrarElemento();
            this.fila = f.obterFilaCompleta();
        }
    }
})

console.log(f.tamanho)