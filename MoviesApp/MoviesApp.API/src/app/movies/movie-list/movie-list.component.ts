import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {

    movies: Movie[];

    constructor(private movieService: MovieService,
                private router: Router,
                private route: ActivatedRoute,
                private dataStorageService: DataStorageService,
                private authService: AuthService) { }

    ngOnInit() {
        this.movieService.moviesChanged
            .subscribe(
            (movies: Movie[]) => {
                this.movies = movies;
            });
        this.dataStorageService.getMovies();
    }

    onNewMovie() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
} 