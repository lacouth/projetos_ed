class Lista{
    constructor(inicio = null){
        this._inicio = inicio;
        this._tamanho = inicio ? 1 : 0;
    }

    get tamanho(){
        return this._tamanho;
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

        if(idx>this._tamanho){
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
        }else if(idx==0){
            no.proximo = this._inicio;
            this._inicio = no;
        }else{
            while(p.proximo!=null){
                p = p.proximo;
            }
            p.proximo = no;
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


}

export{Lista}