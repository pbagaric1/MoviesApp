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
var data_storage_service_1 = require("../shared/data-storage.service");
var movie_service_1 = require("../movies/movie.service");
var BestRatedComponent = (function () {
    function BestRatedComponent(dataStorageService, movieService) {
        this.dataStorageService = dataStorageService;
        this.movieService = movieService;
        this.starsCount = 1;
    }
    BestRatedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStorageService.getMoviesOrderedByRating()
            .subscribe(function (movies) {
            _this.movies = movies;
            console.log(_this.movies);
        });
    };
    BestRatedComponent = __decorate([
        core_1.Component({
            selector: 'app-best-rated',
            templateUrl: './best-rated.component.html'
        }),
        __metadata("design:paramtypes", [data_storage_service_1.DataStorageService,
            movie_service_1.MovieService])
    ], BestRatedComponent);
    return BestRatedComponent;
}());
exports.BestRatedComponent = BestRatedComponent;
//# sourceMappingURL=best-rated.component.js.map