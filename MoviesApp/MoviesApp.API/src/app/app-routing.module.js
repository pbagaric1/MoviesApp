"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movies_component_1 = require("./movies/movies.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var movie_detail_component_1 = require("./movies/movie-detail/movie-detail.component");
var movie_edit_component_1 = require("./movies/movie-edit/movie-edit.component");
var signup_component_1 = require("./auth/signup/signup.component");
var signin_component_1 = require("./auth/signin/signin.component");
var best_rated_component_1 = require("./best-rated/best-rated.component");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var admin_guard_service_1 = require("./auth/admin-guard.service");
var genres_component_1 = require("./genres/genres.component");
var genre_edit_component_1 = require("./genres/genre-edit/genre-edit.component");
var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'movies', component: movies_component_1.MoviesComponent, children: [
            { path: 'new', component: movie_edit_component_1.MovieEditComponent, canActivate: [auth_guard_service_1.AuthGuard] },
            { path: 'movieId/:id', component: movie_detail_component_1.MovieDetailComponent },
            { path: 'movieId/:id/edit', component: movie_edit_component_1.MovieEditComponent, canActivate: [auth_guard_service_1.AuthGuard] }
        ]
    },
    {
        path: 'genres', component: genres_component_1.GenresComponent, canActivate: [admin_guard_service_1.AdminGuard], children: [
            { path: 'new', component: genre_edit_component_1.GenreEditComponent, canActivate: [admin_guard_service_1.AdminGuard] },
            { path: 'genreId/:id', component: genre_edit_component_1.GenreEditComponent, canActivate: [admin_guard_service_1.AdminGuard] }
        ]
    },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'bestrated', component: best_rated_component_1.BestRatedComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map