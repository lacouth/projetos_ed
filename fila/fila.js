import{No} from '../no/no' 

class Fila{
    
    constructor(inicio=null){
        this._inicio = inicio;
        this._tamanho = inicio ? 1 : 0;
    }

    get tamanho(){
        return this._tamanho
    }

    adicionar(no){
        let p = this._inicio; 
        while(p.proximo!=null){
            p = p.proximo;
        }
        p.proximo = no;
        this._tamanho++;
    }

    remover(){
        let p = this._inicio
        this._inicio = this._inicio.proximo
        return p.dado;
    }    

    vazio(){
        return this._tamanho == 0
    }
    mostrarElemento(){
        return this._inicio.dado
    }

    ultimo(){
        let p = this._inicio;
        while(p.proximo!=null){
            p = p.proximo;
        }
        return p.dado
    }

    elemento(idx){
        if(idx>=this.tamanho){
            return null;
        }
        let i = 0;
        let p = this._inicio;

        while(i<idx){
            p = p.proximo;
        }
        return p.dado
    }

}

export{Fila}