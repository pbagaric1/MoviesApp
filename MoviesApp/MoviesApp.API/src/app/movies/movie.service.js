"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var MovieService = (function () {
    function MovieService() {
        this.moviesChanged = new Subject_1.Subject();
        this.genresChanged = new Subject_1.Subject();
        this.movieChanged = new Subject_1.Subject();
        this.movies = [];
        this.genres = [];
    }
    MovieService.prototype.ngOnInit = function () {
    };
    MovieService.prototype.getMovies = function () {
        return this.movies.slice();
    };
    MovieService.prototype.getGenres = function () {
        return this.genres.slice();
    };
    MovieService.prototype.setMovies = function (movies) {
        this.movies = movies;
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.setGenres = function (genres) {
        this.genres = genres;
        this.genresChanged.next(this.genres.slice());
    };
    MovieService.prototype.setMovie = function (movie, index) {
        this.movies[index] = movie;
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.getMovie = function (index) {
        return this.movies[index];
    };
    MovieService.prototype.getGenre = function (index) {
        return this.genres[index];
    };
    MovieService.prototype.addMovie = function (movie) {
        this.movies.push(movie);
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService.prototype.addGenre = function (genre) {
        this.genres.push(genre);
        this.genresChanged.next(this.genres.slice());
    };
    MovieService.prototype.updateMovie = function (index, newMovie) {
        this.movies[index] = newMovie;
        this.moviesChanged.next(this.movies.slice());
        this.movieChanged.next(this.movies[index]);
    };
    MovieService.prototype.updateGenre = function (index, newGenre) {
        this.genres[index] = newGenre;
        this.genresChanged.next(this.genres.slice());
    };
    MovieService.prototype.deleteMovie = function (index) {
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map