class Pokemon {

    private _id: number = -1; 
    private _order: number = -1;
    private _name: string = "";
    private _types: [] = [];
    private _weight: number = -1;
    private _abilities: [] = [];
    
    public get id(): number {
        return this._id;
    }


    public set id(value: number) {
        this._id = value;
    }


    public get order(): number {
        return this._order;
    }


    public get name(): string {
        return this._name;
    }


    public get types(): [] {
        return this._types;
    }

    public get weight(): number {
        return this._weight;
    }


    public get abilities(): [] {
        return this._abilities;
    }


    public set order(value: number) {
        this._order = value;
    }


    public set name(value: string) {
        this._name = value;
    }


    public set types(value: []) {
        this._types = value;
    }


    public set weight(value: number) {
        this._weight = value;
    }


    public set abilities(value: []) {
        this._abilities = value;
    }

    getPokemonData() {

    }

}

export default Pokemon;