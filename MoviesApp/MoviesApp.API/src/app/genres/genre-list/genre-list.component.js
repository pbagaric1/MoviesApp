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
var movie_service_1 = require("../../movies/movie.service");
var GenreListComponent = (function () {
    function GenreListComponent(movieService, router, route) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
    }
    GenreListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.genresChanged
            .subscribe(function (genres) {
            _this.genres = genres;
        });
        this.genres = this.movieService.getGenres();
        console.log(this.genres);
    };
    GenreListComponent.prototype.onNewGenre = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    GenreListComponent = __decorate([
        core_1.Component({
            selector: 'app-genre-list',
            templateUrl: './genre-list.component.html'
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], GenreListComponent);
    return GenreListComponent;
}());
exports.GenreListComponent = GenreListComponent;
//# sourceMappingURL=genre-list.component.js.map