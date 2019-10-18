class No{
    constructor(dado,proximo=null){
        this._dado = dado;
        this._proximo = proximo;
    }

    get dado(){
        return this._dado;
    }

    get proximo(){
        return this._proximo
    }

    set proximo(p){
        this._proximo = p
    }
}

export{No}