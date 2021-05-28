import { Libro } from "./Libro";

export class ListLibro {
    list : Libro[]
    constructor() { 
        this.list = []
    }

    public addLibro(libro: Libro) {
        this.list.push(libro)
    }
}