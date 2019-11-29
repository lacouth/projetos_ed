class Arvore {
    constructor(raiz = null) {
        this._raiz = raiz
        this._lista = []
        this._quantidade = raiz ? 1 : 0
    }
    inserir(no) {
        if(this._raiz != null){
            let p = this._raiz
            while (true) {
                if (no.dado > p.dado) {
                    if (p.direita != null) {
                        // p.fb--
                        p = p.direita
                    } else {
                        p.direita = no
                        // p.fb--
                        this._quantidade++
                        break
                    }
                } else {
                    if (p.esquerda != null) {
                        // p.fb++
                        p = p.esquerda    
                    } else {
                        p.esquerda = no
                        // p.fb++
                        this._quantidade++
                        break
                    }
                }
            }
        } else {
            this._raiz = no
            this._quantidade++
        }
        this.atualizaBalanceamentoDaArvore()
    }

    
    getAltura(no){
        let altura = 0
        if( !no ){
            altura = -1
        }else{
            altura = Math.max(this.getAltura(no.esquerda),this.getAltura(no.direita)) + 1
        }
        return altura
    }

    get raiz() {
        return this._raiz
    }

    get listaDeNosEmOrdem() {
        this._lista = []
        this.emOrdem(this._raiz)
        return this._lista
    }

    
    get quantidade() {
        return this._quantidade
    }

    adicionarNaLista(no) {
        this._lista.push(no)
    }

    emOrdem(arvore) {
        if (arvore != null) {
            this.emOrdem(arvore.esquerda)
            this.adicionarNaLista(arvore.dado)
            this.emOrdem(arvore.direita)
        }
    }

    emLargura() {
        let nos = [this._raiz]
        let inicio = 0
        let fim = nos.length
        let contador = 0
        let level = 0
        while (contador < this._quantidade) {
            for (let i = inicio; i < fim; i++) {
                if (nos[i] != null) {
                    nos.push(nos[i].esquerda)
                    nos.push(nos[i].direita)
                }else{
                    nos.push(null)
                    nos.push(null)
                }
            }
            inicio = 2**(level+1)-1
            level++
            fim = nos.length
            contador = nos.reduce((acc,v) => v ? ++acc : acc ,0)
        }
        // this._level = level
        // return nos.map(n => n ? n.dado : n)
        return nos
    }

    atualizaBalanceamentoDaArvore(){
        let nos = this.emLargura()
        nos.map( n => n ? n.fb = this.getAltura(n.esquerda) - this.getAltura(n.direita): 0 )
    }

    getJSON(){
        let array = this.emLargura()
        
        let json = {
            name: `${array[0].dado} : ${array[0].fb}` ,
            children: this._getChildren(0,array)
        }
        return json  
    }

    _getChildren(pai,nos){

        if( pai >= nos.length){
            return {}
        }else{
            let children = []
            if( nos[2*pai+1] != null ){ 
                
                children.push({
                    name: `${nos[2*pai+1].dado} : ${nos[2*pai+1].fb}`  ,
                    children: this._getChildren(2*pai+1,nos)
                })

            } 

            if( nos[2*pai+2] != null ){

                children.push({
                    name: `${nos[2*pai+2].dado} : ${nos[2*pai+2].fb}`,
                    children: this._getChildren(2*pai+2,nos)
                })

            } 

            return children
        }

    }
}

export { Arvore }