﻿export class Movie {

    public id: string;
    public genre: string;
    public name: string;
    public actors: string;
    public rating: number;
    public description: string;
    public addedBy: string;
    public numberOfRatings: number;
    public imagePath: string;
    public timeOfAdding: string;
    public ratedBy: string;

    constructor(id: string, name: string, actors: string, rating: number,
         desc: string, addedBy: string, numberOfRatings: number,
         imagePath: string, timeOfAdding: string, ratedBy: string, genre: string) {

        this.id = id;
        this.name = name;
        this.actors = actors;
        this.rating = rating;
        this.description = desc;
        this.addedBy = addedBy;
        this.numberOfRatings = numberOfRatings;
        this.imagePath = imagePath;
        this.timeOfAdding = timeOfAdding;
        this.ratedBy = ratedBy;
        this.genre = genre;
    }
}