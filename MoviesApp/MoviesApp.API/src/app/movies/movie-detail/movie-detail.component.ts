import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from '../movie.model';
import { RatingModule} from 'ngx-rating';
import { MovieService } from '../movie.service'
import { DataStorageService } from '../../shared/data-storage.service';
import { Genre } from '../genre.model';
import { AuthService } from '../../auth/auth.service';


@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
    movie: Movie;
    genre: Genre;
    id: number;
    genreId: number;
    starsCount: number;
    movieToRate: Movie;
    userRated = localStorage.getItem('username');
    ifUserRated: boolean;
    genreMode = false;
    isAuthenticated = false;

    constructor(private movieService: MovieService,
        private route: ActivatedRoute,
        private router: Router,
        private dataStorageService: DataStorageService,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.movie = this.movieService.getMovie(this.id);   
                console.log(this.movie);
                this.isAuthenticated = this.authService.isAuthenticated();
                if (this.isAuthenticated)
                {
                    this.dataStorageService.getUserRating(this.id, this.movie.id, this.userRated)
                        .subscribe(userRating => {
                            this.starsCount = userRating;
                            if (userRating == 0)
                                this.ifUserRated = false; 
                            else this.ifUserRated = true;
                        })
                }
                
            }
        );
        this.movieService.movieChanged
            .subscribe(
            (movie: Movie) => {
                this.movie = movie;
            });
    }

    onRating() {
        
        this.movieToRate = Object.assign({}, this.movie);
        this.movieToRate.rating = this.starsCount;
        console.log(this.movieToRate);
        this.dataStorageService.editRating(this.id, this.movieToRate, this.userRated);
    }

    onEditMovie() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    onDeleteMovie() {
        this.dataStorageService.deleteMovie(this.id, this.userRated);

        //this.movieService.deleteMovie(this.id);
        this.router.navigate(['/movies']);
    }

    checkIfUserAdded() {
        if (localStorage.getItem('username') == this.movie.addedBy)
            return true
        else return false;
    }
}