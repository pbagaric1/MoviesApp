import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieService } from './movies/movie.service';
import { DataStorageService } from './shared/data-storage.service';
import { DatePipe } from '@angular/common';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { RatingModule } from 'ngx-rating';
import { StarRatingModule } from 'angular-star-rating';
import { BestRatedComponent } from './best-rated/best-rated.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AdminGuard } from './auth/admin-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenresComponent } from './genres/genres.component';
import { GenreListComponent } from './genres/genre-list/genre-list.component';
import { GenreEditComponent } from './genres/genre-edit/genre-edit.component';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        RatingModule,
        NgProgressModule],

  declarations: [AppComponent,
      HeaderComponent,
      MoviesComponent,
      DashboardComponent,
      MovieEditComponent,
      MovieDetailComponent,
      MovieItemComponent,
      MovieListComponent,
      SignupComponent,
      SigninComponent,
      DropdownDirective,
      BestRatedComponent,
      GenresComponent,
      GenreEditComponent,
      GenreListComponent],

  providers: [MovieService, DataStorageService, AuthService, DatePipe,
      AuthGuard, AdminGuard, { provide: BrowserXhr, useClass: NgProgressBrowserXhr }],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
