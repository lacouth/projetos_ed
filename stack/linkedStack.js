import{No} from '../no/no' 

class LinkedStack{
    constructor(topo = null){
        this._topo = topo;
        this._tamanho = topo ? 1 : 0;
    }
    tamanho(){
        return this._tamanho;
    }
    vazio(){
        return this._tamanho == 0;
    }
    adicionar(no){
        let p = this._inicio; 
        while(p.proximo!=null){
            p = p.proximo;
        }
        p.proximo = no;
        this._tamanho++;
    }
    remover(){ //'pop()'
        let p = this._inicio; 
        while(p.proximo!=null){
            p = p.proximo;
        }
        p.dado = null;
        this._tamanho--;
    }
    mostrarTopo(){
        return this._inicio.dado;
    }
}
export{LinkedStack}