import { Movie } from './movie.model';
export class Genre {

    public id: string;
    public type: string;

    constructor(id: string, type: string) {

        this.id = id;
        this.type = type;
    }
}