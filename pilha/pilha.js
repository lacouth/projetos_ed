class Pilha{
    constructor(inicio = null){
        this._inicio = inicio;
        this._tamanho = inicio ? 1 : 0;
    }
    get tamanho(){
        return this._tamanho
    }
    adicionar(no){
        no.proximo = this._inicio;
        this._inicio = no;
        this._tamanho++;
    }
    remover(){
        if(this._tamanho){
            let p = this._inicio
            this._inicio = this._inicio.proximo
            this._tamanho--;
            return p.dado;
        }else{
            return null;
        }
    }
    vazio(){
        return this._tamanho == 0
    }
    mostrarElemento(){
        if(this._tamanho)
            return this._inicio.dado
        return '';
    }
    obterPilhaCompleta(){
        let pilha = [];
        if(this._tamanho){
            let p = this._inicio;
            while(p!=null){
                pilha.push(p.dado);
                p = p.proximo;
            }
        }
        return pilha;
    }
}

export{Pilha}