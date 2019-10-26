class No{
    constructor(dado,proximo=null){
        this._dado = dado;
        this._proximo = proximo;
    }

    get dado(){
        return this._dado;
    }

    set dado(d){
        this._dado = d;
    }

    get proximo(){
        return this._proximo;
    }

    set proximo(p){
        this._proximo = p;
    }
}

export{No}