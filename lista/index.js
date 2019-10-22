import { Lista } from './lista.js'
import { No } from '../no/no.js'
import { Paciente } from '../paciente/paciente.js'
let f = new Lista;

var app = new Vue({
    el: '#app',
    data: {
        nome : '',
        idade: '',
        topo: '',
        lista: '',
        tamanho: '0'
    },
    methods:{
        adicionar: function (event){
            f.adicionar(new No(new Paciente(this.nome,this.idade)));
            this.topo = f.elemento(0);
            this.lista = f.obterListaCompleta();
            this.tamanho = f.tamanho;
            this.nome = '';
            this.idade = '';
        },
        inserir: function(idx){
            f.inserir(new No(new Paciente(this.nome,this.idade)),idx);
            this.topo = f.elemento(0);
            this.lista = f.obterListaCompleta();
            this.tamanho = f.tamanho;
            this.nome = '';
            this.idade = '';
        },
        remover: function(event){
            f.remover(0);
            this.topo = f.elemento(0);
            this.lista = f.obterListaCompleta();
            this.tamanho = f.tamanho;
        },
        retirar: function(idx){
            f.remover(idx);
            this.topo = f.elemento(0);
            this.lista = f.obterListaCompleta();
            this.tamanho = f.tamanho;

        },
        ordenarPorNome: function(event){
            f.ordenar((a,b)=>a.nome<b.nome);
            this.topo = f.elemento(0);
            this.lista = f.obterListaCompleta();
        },
        ordenarPorIdade: function(event){
            f.ordenar((a,b)=>a.idade>b.idade);
            this.topo = f.elemento(0);
            this.lista = f.obterListaCompleta();
        },
        ordenarPorHora: function(event){
            f.ordenar((a,b)=>a.hora<b.hora);
            this.topo = f.elemento(0);
            this.lista = f.obterListaCompleta();
        }
    }
})

console.log(f.tamanho)