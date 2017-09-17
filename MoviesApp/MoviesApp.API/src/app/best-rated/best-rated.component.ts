import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Movie } from '../movies/movie.model';
import { RatingModule } from 'ngx-rating';
import { Observable } from 'rxjs/Observable';
import { MovieService } from '../movies/movie.service';

@Component({
    selector: 'app-best-rated',
    templateUrl: './best-rated.component.html'
})
export class BestRatedComponent implements OnInit{

    constructor(private dataStorageService: DataStorageService,
        private movieService: MovieService) { }

    starsCount: number = 1;
    movies: Movie[];
    ngOnInit() {
        this.dataStorageService.getMoviesOrderedByRating()
            .subscribe(
            (movies) => {
                this.movies = movies;
                console.log(this.movies)
            });
    }
        
    }