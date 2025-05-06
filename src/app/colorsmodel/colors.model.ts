export class Colors {
    public ID!: number;
    public hex_value!: string;
    public name!: string;


constructor(ID: number, hex_value: string, name: string){
    this.ID = ID!;
    this.hex_value = hex_value!;
    this.name = name!;
}

}