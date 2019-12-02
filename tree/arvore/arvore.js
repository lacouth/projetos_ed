class Arvore {
    constructor(raiz = null) {
        this._raiz = raiz
        this._lista = []
        this._quantidade = raiz ? 1 : 0
    }
    inserir(no,comparador) {
        if(this._raiz != null){
            let p = this._raiz
            while (true) {
                if (comparador(no,p)) {
                    if (p.direita != null) {
                        p = p.direita
                    } else {
                        p.direita = no
                        this._quantidade++
                        break
                    }
                } else {
                    if (p.esquerda != null) {
                        p = p.esquerda    
                    } else {
                        p.esquerda = no
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
        return nos
    }

    atualizaBalanceamentoDaArvore(){
        let nos = this.emLargura()
        nos.map( n => n ? n.fb = this.getAltura(n.esquerda) - this.getAltura(n.direita): 0 )
    }

    getJSON(){
        let array = this.emLargura()
        
        let json = {
            name: `${array[0].dado.titulo} - ${array[0].dado.id} : ${array[0].fb}` ,
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
                    name: `${nos[2*pai+1].dado.titulo} - ${nos[2*pai+1].dado.id} : ${nos[2*pai+1].fb}`  ,
                    children: this._getChildren(2*pai+1,nos)
                })

            } 

            if( nos[2*pai+2] != null ){

                children.push({
                    name: `${nos[2*pai+2].dado.titulo} - ${nos[2*pai+2].dado.id} : ${nos[2*pai+2].fb}`,
                    children: this._getChildren(2*pai+2,nos)
                })

            } 

            return children
        }

    }
    balancearArvore(){
        let nos = this.emLargura()
        for( let i = 0 ; i<nos.length ; i++){
            if ( nos[i] && Math.abs(nos[i].fb) > 1 ){
                
                if( nos[i].fb >0 && nos[i].esquerda.fb < 0){
                    nos[i].esquerda = this.rotacionarAEsquerda(nos[i].esquerda)
                    if(i != 0){
                        let idx = parseInt((i-1)/2)
                        nos[idx].esquerda = this.rotacionarADireita(nos[i])
                    }else{
                        this.rotacionarADireita(nos[i])
                    }
                    this.atualizaBalanceamentoDaArvore()
                    break
                }else if (nos[i].fb < 0 && nos[i].direita.fb > 0){
                    nos[i].direita = this.rotacionarADireita(nos[i].direita)
                    if( i != 0){
                        let idx = parseInt((i-2)/2)  
                        nos[idx].direita = this.rotacionarAEsquerda(nos[i])
                    } else {
                        this.rotacionarAEsquerda(nos[i])
                    }

                    this.atualizaBalanceamentoDaArvore()
                    break
                }else if ( nos[i].fb > 0 ){
                    this.rotacionarADireita(nos[i])
                    this.atualizaBalanceamentoDaArvore()
                    break
                }else{
                    this.rotacionarAEsquerda(nos[i])
                    this.atualizaBalanceamentoDaArvore()
                    break
                }
            }
        }
    }

    rotacionarADireita(no){

        let flag = false
        if (no === this._raiz) flag = true

        let p = no.esquerda
        no.esquerda = p.direita
        p.direita = no

        if (flag) this._raiz = p

        return p
        
    }

    rotacionarAEsquerda(no){
        let flag = false

        if(no===this._raiz) flag = true

        let p = no.direita
        no.direita = p.esquerda
        p.esquerda = no

        if(flag) this._raiz = p
        
        return p
    }

    buscarPorId(id){
        let p = this._raiz
        while( p != null){
            if (p.dado.id == id){
                break
            }
            p =  id > p.dado.id ? p.direita : p.esquerda
        }
        return p != null ? p.dado : -1
    }
    buscarPorAno(ano){
        return this.listaDeNosEmOrdem.filter(a=>a.ano == ano)
    }
}

export { Arvore }