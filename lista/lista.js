import {No} from '../no/no.js'
class Lista{
    constructor(inicio = null){
        this._inicio = inicio;
        this._tamanho = inicio ? 1 : 0;
    }

    get tamanho(){
        return this._tamanho;
    }

    get inicio(){
        return this._inicio;
    }

    vazio(){
        return this._tamanho == 0;
    }

    adicionar(no){
        // Adiciona um novo nó no final da lista
        if(this._inicio){
            let p =this._inicio;
            while(p.proximo!=null){
                p = p.proximo;
            }
            p.proximo = no;
        }else{
            this._inicio = no;
        }
        this._tamanho++;
    }

    elemento(idx){

        if(idx>this._tamanho || this._tamanho==0){
            return null;
        }
        let p = this._inicio;
        for(let i=0;i<idx;i++){
            p = p.proximo;
        }
        return p.dado;
    }

    inserir(no, idx){
        let p = this._inicio;
        if(idx){
            for(let i=1; i<idx;i++){
                p = p.proximo;
            }
            no.proximo = p.proximo;
            p.proximo = no;
            this._tamanho++;
        }else if(idx==0){
            no.proximo = this._inicio;
            this._inicio = no;
            this._tamanho++;
        }else{
            this.adicionar(no)
        }  
    }

    remover(idx){
        let p = this._inicio;

        if(idx==0){
            this._inicio = this._inicio.proximo;
            this._tamanho--;
        }else if(idx<this._tamanho){
            for(let i=0;i<idx-1;i++){
                p = p.proximo;
            }
            p.proximo = p.proximo.proximo;
            this._tamanho--;
        }else{
            console.log("índice inválido", idx);
        }
    }

    obterListaCompleta(){
        let lista = [];
        if(this._tamanho){
            let p = this._inicio;
            while(p!=null){
                lista.push(p.dado);
                p = p.proximo;
            }
        }
        return lista;
    }

    ordenar(comparador, bruteForce=false){
        if(!bruteForce){
            this.bubbleSort(comparador)
        }else{
            this.insertionSort(comparador)
        }
        
    }

    bubbleSort(comparador){
        let mudanca = false;
        let p = this._inicio;
        let aux;
        do{
            mudanca = false;
            p = this._inicio;
            while(p.proximo!=null){
                if(!comparador(p.dado,p.proximo.dado)){
                    aux = p.dado;
                    p.dado = p.proximo.dado;
                    p.proximo.dado = aux;
                    mudanca = true;
                }
                p = p.proximo;
            }
        }while(mudanca);
    }

    insertionSort(comparador){
        let novaLista = new Lista;
        let p;
        let i;
        let pos;
        let menor;
        while(!this.vazio()){
            menor = this._inicio;
            p = this._inicio.proximo;
            
            i = 1;     // refere-se ao indíce do p
            pos = 0;   // refere-se ao indíce do menor
            while(p!=null){
                if(comparador(p.dado,menor.dado)){
                    menor = p;
                    pos = i;
                }
                p = p.proximo;
                i++;
            }
            novaLista.adicionar(new No(menor.dado));
            this.remover(pos);
        }
        this._tamanho = novaLista.tamanho;
        this._inicio = novaLista.inicio;
    }
}

export{Lista}