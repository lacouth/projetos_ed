class Fila{
    
    constructor(inicio=null){
        this._inicio = inicio;
        this._tamanho = inicio ? 1 : 0;
    }

    get tamanho(){
        return this._tamanho
    }

    adicionar(no){
        if(this._inicio){
            let p = this._inicio; 
            while(p.proximo!=null){
                p = p.proximo;
            }
            p.proximo = no;
        }else{
            this._inicio = no;
        }
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

    ultimo(){
        let p = this._inicio;
        while(p.proximo!=null){
            p = p.proximo;
        }
        return p.dado
    }

    elemento(idx){
        if(idx>=this._tamanho){
            return null;
        }
        let i = 0;
        let p = this._inicio;

        while(i<idx){
            p = p.proximo;
            i++;
        }
        return p.dado
    }

    obterFilaCompleta(){
        let fila = [];
        if(this._tamanho){
            let p = this._inicio;
            while(p!=null){
                fila.push(p.dado);
                p = p.proximo;
            }
        }
        return fila;
    }

}

export{Fila}