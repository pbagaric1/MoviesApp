"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var movies_component_1 = require("./movies/movies.component");
var movie_detail_component_1 = require("./movies/movie-detail/movie-detail.component");
var movie_item_component_1 = require("./movies/movie-list/movie-item/movie-item.component");
var movie_list_component_1 = require("./movies/movie-list/movie-list.component");
var dropdown_directive_1 = require("./shared/dropdown.directive");
var movie_edit_component_1 = require("./movies/movie-edit/movie-edit.component");
var movie_service_1 = require("./movies/movie.service");
var data_storage_service_1 = require("./shared/data-storage.service");
var common_1 = require("@angular/common");
var signup_component_1 = require("./auth/signup/signup.component");
var signin_component_1 = require("./auth/signin/signin.component");
var auth_service_1 = require("./auth/auth.service");
var ngx_rating_1 = require("ngx-rating");
var best_rated_component_1 = require("./best-rated/best-rated.component");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var admin_guard_service_1 = require("./auth/admin-guard.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var genres_component_1 = require("./genres/genres.component");
var genre_list_component_1 = require("./genres/genre-list/genre-list.component");
var genre_edit_component_1 = require("./genres/genre-edit/genre-edit.component");
var ngx_progressbar_1 = require("ngx-progressbar");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                ngx_rating_1.RatingModule,
                ngx_progressbar_1.NgProgressModule],
            declarations: [app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                movies_component_1.MoviesComponent,
                dashboard_component_1.DashboardComponent,
                movie_edit_component_1.MovieEditComponent,
                movie_detail_component_1.MovieDetailComponent,
                movie_item_component_1.MovieItemComponent,
                movie_list_component_1.MovieListComponent,
                signup_component_1.SignupComponent,
                signin_component_1.SigninComponent,
                dropdown_directive_1.DropdownDirective,
                best_rated_component_1.BestRatedComponent,
                genres_component_1.GenresComponent,
                genre_edit_component_1.GenreEditComponent,
                genre_list_component_1.GenreListComponent],
            providers: [movie_service_1.MovieService, data_storage_service_1.DataStorageService, auth_service_1.AuthService, common_1.DatePipe,
                auth_guard_service_1.AuthGuard, admin_guard_service_1.AdminGuard, { provide: http_1.BrowserXhr, useClass: ngx_progressbar_1.NgProgressBrowserXhr }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map