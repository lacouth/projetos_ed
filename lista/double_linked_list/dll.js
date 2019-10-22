class No{
    constructor(dado){
        this.dado = dado;
        this.anterior = null;
        this.proximo = null;
    }
}

class LinkedList{
    constructor(){
        this._inicio = null;
        this._fim = null;
        this._tamanho = topo ? 1 : 0;
    }
    adicionar(no){
        let novoNo = No(no); 
        if(this._inicio === null){
            this._inicio = this._fim = novoNo;
            this._inicio.anterior = null;
            this._fim.proximo = null;
            this._tamanho++;
        } else{
            this._fim.proximo = novoNo;
            novoNo.anterior = this._fim;
            this._fim = novoNo;
            this._fim.proximo = null;
            this._tamanho++;
        }
    }
    ordenar(){
        if(this._inicio === null){
            return;
        } else{
            let atual = this._inicio;
            let temp;
            let index;
            while(p.proximo!=null){
                if(atual.dado > index.dado){
                    temp = atual.dado;
                    atual.dado = index.dado;
                    index.dado =temp;
                index = index.proximo;
            atual = atual.proximo;
                }
            }
        }
    }
    vazio(){
        return this._tamanho == 0;
    }
    elemento(posicao){
        if(posicao>=this._tamanho){
            return null;
        }
        let i = 0;
        let p = this._inicio;
        while(i<posicao){
            p = p.proximo;
            i++;
        }
        return p.dado;
    }

}