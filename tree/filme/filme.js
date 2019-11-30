class Filme{
    constructor(titulo, ano, id){
        this._titulo = titulo
        this._ano = ano
        this._id = id
    }

    set titulo(t){
        this._titulo = t
    }

    get titulo(){
        return this._titulo
    }

    set ano(t){
        this._ano = t
    }

    get ano(){
        return this._ano
    }

    set id(t){
        this._id = t
    }

    get id(){
        return this._id
    }
}

export{Filme}