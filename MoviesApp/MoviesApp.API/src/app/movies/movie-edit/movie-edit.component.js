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
var router_1 = require("@angular/router");
var movie_service_1 = require("../movie.service");
var data_storage_service_1 = require("../../shared/data-storage.service");
var forms_1 = require("@angular/forms");
var movie_model_1 = require("../movie.model");
var common_1 = require("@angular/common");
var angular2_uuid_1 = require("angular2-uuid");
var MovieEditComponent = (function () {
    function MovieEditComponent(route, movieService, router, dataStorageService, datePipe) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.datePipe = datePipe;
        this.editMode = false;
        this.movieId = '';
        this.movieName = '';
        this.movieImagePath = '';
        this.movieDescription = '';
        this.movieGenreId = '';
        this.movieActors = '';
        this.movieAddedBy = '';
        this.movieTimeOfAdding = '';
    }
    MovieEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
        this.movieService.genresChanged
            .subscribe(function (genres) {
            _this.genres = genres;
        });
        this.genres = this.movieService.getGenres();
    };
    MovieEditComponent.prototype.onSubmit = function () {
        var newMovieId = angular2_uuid_1.UUID.UUID();
        this.movieRatedBy = localStorage.getItem('username');
        var currentTime = Date.now();
        var timeOfAdding = this.datePipe.transform(currentTime, 'yyyy-MM-dd hh:mm:ss');
        var newMovie = new movie_model_1.Movie(newMovieId, this.movieForm.value['name'], this.movieForm.value['actors'], 0, this.movieForm.value['description'], localStorage.getItem('username'), 0, this.movieForm.value['imagePath'], timeOfAdding, this.movieRatedBy, this.movieForm.value['genre']);
        if (this.editMode) {
            this.editMovie = new movie_model_1.Movie(this.movieId, this.movieForm.value['name'], this.movieForm.value['actors'], this.movieRating, this.movieForm.value['description'], this.movieAddedBy, this.movieNumberOfRatings, this.movieForm.value['imagePath'], this.movieTimeOfAdding, this.movieRatedBy, this.movieGenre);
            this.dataStorageService.editMovie(this.id, this.editMovie, this.movieRatedBy);
        }
        else {
            console.log(newMovie);
            this.dataStorageService.addMovie(newMovie);
        }
        this.onCancel();
    };
    MovieEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    MovieEditComponent.prototype.initForm = function () {
        if (this.editMode) {
            var movie = this.movieService.getMovie(this.id);
            this.movieId = movie.id;
            this.movieName = movie.name;
            this.movieImagePath = movie.imagePath;
            this.movieDescription = movie.description;
            this.movieActors = movie.actors;
            this.movieRating = movie.rating;
            this.movieAddedBy = movie.addedBy;
            this.movieTimeOfAdding = movie.timeOfAdding;
            this.movieNumberOfRatings = movie.numberOfRatings;
            this.movieGenre = movie.genre;
        }
        this.movieForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(this.movieName, forms_1.Validators.required),
            'imagePath': new forms_1.FormControl(this.movieImagePath, forms_1.Validators.required),
            'description': new forms_1.FormControl(this.movieDescription, forms_1.Validators.required),
            'genre': new forms_1.FormControl(this.movieGenre, forms_1.Validators.required),
            'actors': new forms_1.FormControl(this.movieActors, forms_1.Validators.required)
        });
    };
    MovieEditComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-edit',
            templateUrl: './movie-edit.component.html',
            styleUrls: ['./movie-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            movie_service_1.MovieService,
            router_1.Router,
            data_storage_service_1.DataStorageService,
            common_1.DatePipe])
    ], MovieEditComponent);
    return MovieEditComponent;
}());
exports.MovieEditComponent = MovieEditComponent;
//# sourceMappingURL=movie-edit.component.js.map