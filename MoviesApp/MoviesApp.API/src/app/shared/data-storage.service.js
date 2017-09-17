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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var movie_service_1 = require("../movies/movie.service");
require("rxjs/Rx");
var DataStorageService = (function () {
    function DataStorageService(http, route, movieService) {
        this.http = http;
        this.route = route;
        this.movieService = movieService;
    }
    DataStorageService.prototype.ngOnInit = function () {
    };
    DataStorageService.prototype.getMovies = function () {
        var _this = this;
        this.http.get('http://localhost:55840/api/movie/getall')
            .subscribe(function (response) {
            var movies = response.json();
            _this.movieService.setMovies(movies);
        });
    };
    DataStorageService.prototype.getGenres = function () {
        var _this = this;
        return this.http.get('http://localhost:55840/api/genre/getall')
            .subscribe(function (response) {
            var genres = response.json();
            _this.movieService.setGenres(genres);
        });
    };
    DataStorageService.prototype.getMoviesOrderedByRating = function () {
        return this.http.get('http://localhost:55840/api/movie/bestrated')
            .map(function (res) { return res.json(); });
    };
    DataStorageService.prototype.addMovie = function (movie) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
        console.log(headers);
        return this.http.post('http://localhost:55840/api/movie/add', movie, { headers: headers })
            .subscribe(function (res) {
            _this.movieService.addMovie(movie);
            console.log(res);
        }, function (error) {
            console.log(error);
            window.alert(error.statusText);
        });
    };
    DataStorageService.prototype.addGenre = function (genre) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
        console.log(headers);
        return this.http.post('http://localhost:55840/api/genre/add', genre, { headers: headers })
            .subscribe(function (res) {
            _this.movieService.addGenre(genre);
            console.log(res);
        }, function (error) {
            console.log(error);
            window.alert(error.statusText);
        });
    };
    DataStorageService.prototype.editMovie = function (id, movie, user) {
        var _this = this;
        console.log(movie);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.put('http://localhost:55840/api/movie/edit?id=' + movie.id, { movie: movie, user: user }, { headers: headers })
            .subscribe(function (res) {
            _this.movieService.updateMovie(id, movie);
            console.log(res);
        }, function (error) {
            console.log(error);
            window.alert(error.statusText);
        });
    };
    DataStorageService.prototype.editGenre = function (id, genre) {
        var _this = this;
        console.log(genre);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.put('http://localhost:55840/api/genre/edit?id=' + genre.id, genre, { headers: headers })
            .subscribe(function (res) {
            _this.movieService.updateGenre(id, genre);
            console.log(res);
        }, function (error) {
            console.log(error);
            window.alert(error.statusText);
        });
    };
    DataStorageService.prototype.editRating = function (id, movie, userRated) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.post('http://localhost:55840/api/rating/add', { movie: movie, userRated: userRated }, { headers: headers })
            .subscribe(function (res) {
            window.alert("Thanks for rating this movie!");
            _this.http.get('http://localhost:55840/api/movie/get?id=' + movie.id)
                .subscribe(function (res) {
                var updatedMovie = res.json();
                _this.movieService.updateMovie(id, updatedMovie);
            });
            //const updatedMovie: Movie = res.json();
        }, function (error) {
            console.log(error);
            window.alert(error.statusText);
        });
    };
    DataStorageService.prototype.deleteMovie = function (id, user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
        var movie = this.movieService.getMovie(id);
        console.log(movie);
        return this.http.delete('http://localhost:55840/api/movie/delete?id=' + movie.id + '&user=' + user, { headers: headers })
            .subscribe(function (res) {
            _this.movieService.deleteMovie(id);
        }, function (error) {
            console.log(error);
            window.alert(error.statusText);
        });
    };
    DataStorageService.prototype.getUserRating = function (id, movieId, userRated) {
        return this.http.get('http://localhost:55840/api/rating/getuserrating?movieId=' + movieId + '&userRated=' + userRated)
            .map(function (res) { return res.json(); });
    };
    DataStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.ActivatedRoute,
            movie_service_1.MovieService])
    ], DataStorageService);
    return DataStorageService;
}());
exports.DataStorageService = DataStorageService;
//# sourceMappingURL=data-storage.service.js.map