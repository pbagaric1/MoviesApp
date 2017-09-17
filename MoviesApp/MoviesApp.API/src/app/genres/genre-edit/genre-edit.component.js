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
var data_storage_service_1 = require("../../shared/data-storage.service");
var forms_1 = require("@angular/forms");
var genre_model_1 = require("../../movies/genre.model");
var angular2_uuid_1 = require("angular2-uuid");
var GenreEditComponent = (function () {
    function GenreEditComponent(route, movieService, router, dataStorageService) {
        this.route = route;
        this.movieService = movieService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.editMode = false;
        this.genreName = '';
        this.genreId = '';
    }
    GenreEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    GenreEditComponent.prototype.onSubmit = function () {
        var newGenreId = angular2_uuid_1.UUID.UUID();
        var newGenre = new genre_model_1.Genre(newGenreId, this.genreForm.value['name']);
        if (this.editMode) {
            this.editGenre = new genre_model_1.Genre(this.genreId, this.genreForm.value['name']);
            this.dataStorageService.editGenre(this.id, this.editGenre);
        }
        else {
            console.log(newGenre);
            this.dataStorageService.addGenre(newGenre);
        }
        this.onCancel();
    };
    GenreEditComponent.prototype.onCancel = function () {
        this.router.navigate(['/genres']);
    };
    GenreEditComponent.prototype.initForm = function () {
        if (this.editMode) {
            var genre = this.movieService.getGenre(this.id);
            this.genreId = genre.id;
            this.genreName = genre.type;
        }
        this.genreForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(this.genreName, forms_1.Validators.required),
        });
    };
    GenreEditComponent = __decorate([
        core_1.Component({
            selector: 'app-genre-edit',
            templateUrl: './genre-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            movie_service_1.MovieService,
            router_1.Router,
            data_storage_service_1.DataStorageService])
    ], GenreEditComponent);
    return GenreEditComponent;
}());
exports.GenreEditComponent = GenreEditComponent;
//# sourceMappingURL=genre-edit.component.js.map