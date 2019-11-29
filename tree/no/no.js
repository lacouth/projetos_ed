class No{
    constructor(dado,esquerda=null, direita=null){
        this._dado = dado
        this._esquerda = esquerda
        this._direita = direita
        this._fb = 0
    }

    get dado(){
        return this._dado;
    }

    set dado(d){
        this._dado = d;
    }

    get esquerda(){
        return this._esquerda;
    }

    set esquerda(p){
        this._esquerda = p;
    }

    get direita(){
        return this._direita;
    }

    set direita(p){
        this._direita = p;
    }

    set fb(b){
        this._fb = b
    }

    get fb(){
        return this._fb
    }
}

export{ No }