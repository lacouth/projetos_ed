class Arvore {
    constructor(raiz = null) {
        this._raiz = raiz
        this._lista = []
        this._quantidade = raiz ? 1 : 0
    }
    inserir(no) {
        let p = this._raiz
        while (true) {
            if (no.dado > p.dado) {
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
    }

    get raiz() {
        return this._raiz
    }

    get listaDeNosEmOrdem() {
        this._lista = []
        this.emOrdem(this._raiz)
        return this._lista
    }

    get listaDeNosEmLargura() {
        this._lista = []
        this.emLargura(this._raiz)
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
        let fim = 1
        while (inicio < fim) {
            for (let i = inicio; i < fim; i++) {
                if (nos[i] != null) {
                    nos.push(nos[i].esquerda)
                    nos.push(nos[i].direita)
                }
            }
            inicio += 2 ** inicio
            fim = nos.length
        }
        return nos.map(n => n ? n.dado : n)
    }
}

export { Arvore }