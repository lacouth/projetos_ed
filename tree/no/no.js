class No{
    constructor(dado,esquerda=null, direita=null){
        this._dado = dado
        this._esquerda = esquerda
        this._direita = direita
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
}

export{No}