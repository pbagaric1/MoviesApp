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
var auth_service_1 = require("../../auth/auth.service");
var MovieDetailComponent = (function () {
    function MovieDetailComponent(movieService, route, router, dataStorageService, authService) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.userRated = localStorage.getItem('username');
        this.genreMode = false;
        this.isAuthenticated = false;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.movie = _this.movieService.getMovie(_this.id);
            console.log("id=" + _this.id, "genreId=" + _this.genreId);
            _this.isAuthenticated = _this.authService.isAuthenticated();
            if (_this.isAuthenticated) {
                _this.dataStorageService.getUserRating(_this.id, _this.movie.id, _this.userRated)
                    .subscribe(function (userRating) {
                    _this.starsCount = userRating;
                    if (userRating == 0)
                        _this.ifUserRated = false;
                    else
                        _this.ifUserRated = true;
                });
            }
        });
        this.movieService.movieChanged
            .subscribe(function (movie) {
            _this.movie = movie;
        });
    };
    MovieDetailComponent.prototype.onRating = function () {
        this.movieToRate = Object.assign({}, this.movie);
        this.movieToRate.rating = this.starsCount;
        console.log(this.movieToRate);
        this.dataStorageService.editRating(this.id, this.movieToRate, this.userRated);
    };
    MovieDetailComponent.prototype.onEditMovie = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    MovieDetailComponent.prototype.onDeleteMovie = function () {
        this.dataStorageService.deleteMovie(this.id, this.userRated);
        //this.movieService.deleteMovie(this.id);
        this.router.navigate(['/movies']);
    };
    MovieDetailComponent.prototype.checkIfUserAdded = function () {
        if (localStorage.getItem('username') == this.movie.addedBy)
            return true;
        else
            return false;
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-detail',
            templateUrl: './movie-detail.component.html',
            styleUrls: ['./movie-detail.component.css']
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.ActivatedRoute,
            router_1.Router,
            data_storage_service_1.DataStorageService,
            auth_service_1.AuthService])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map