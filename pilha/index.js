import { Pilha } from './pilha.js'
import { No } from '../no/no.js'
import { Paciente } from '../paciente/paciente.js'
let f = new Pilha;

var app = new Vue({
    el: '#app',
    data: {
        nome : '',
        idade: '',
        topo: '',
        pilha: '',
        tamanho: 0
    },
    methods:{
        adicionar: function (event){
            f.adicionar(new No(new Paciente(this.nome,this.idade)));
            this.topo = f.mostrarElemento();
            this.pilha = f.obterPilhaCompleta();
            this.tamanho = f.tamanho;
            this.nome = '';
            this.idade = '';
        },
        remover: function(event){
            f.remover();
            this.topo = f.mostrarElemento();
            this.pilha = f.obterPilhaCompleta();
            this.tamanho = f.tamanho;
        }
    }
})

console.log(f.tamanho)