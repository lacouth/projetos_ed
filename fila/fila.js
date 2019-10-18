import{No} from '../no/no'

class Fila{
    constructor(inicio=null){
        this._inicio = inicio;
        this._tamanho = inicio ? 1 : 0;
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

    get tamanho(){
        return this._tamanho
    }

    vazio(){
        return this._tamanho == 0
    }
    mostrarElemento(){
        return this._inicio.dado
    }

}

export{Fila}