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
var MovieListComponent = (function () {
    function MovieListComponent(movieService, router, route, dataStorageService, authService) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
        this.authService = authService;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.moviesChanged
            .subscribe(function (movies) {
            _this.movies = movies;
        });
        this.dataStorageService.getMovies();
    };
    MovieListComponent.prototype.onNewMovie = function () {
        this.router.navigate(['new'], { relativeTo: this.route }); //add "new" to current route
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-list',
            templateUrl: './movie-list.component.html'
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.Router,
            router_1.ActivatedRoute,
            data_storage_service_1.DataStorageService,
            auth_service_1.AuthService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map