"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Movie = (function () {
    function Movie(id, name, actors, rating, desc, addedBy, numberOfRatings, imagePath, timeOfAdding, ratedBy, genreId) {
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
        this.genreId = genreId;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.model.js.map