import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Genre } from '../genre.model';
import { Movie } from '../movie.model';
import { DatePipe } from '@angular/common';
import { UUID } from 'angular2-uuid';

@Component({
    selector: 'app-movie-edit',
    templateUrl: './movie-edit.component.html',
    styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
    id: number;
    editMode = false;
    movieForm: FormGroup;
    genres: Genre[];
    selectedGenre: string;
    editMovie: Movie;

    movieId = '';
    movieName = '';
    movieImagePath = '';
    movieDescription = '';
    movieGenreId = '';
    movieActors = '';
    movieRating : number;
    movieAddedBy = '';
    movieTimeOfAdding = '';
    movieNumberOfRatings: number;
    movieRatedBy: string;
    movieGenre: string;

    constructor(private route: ActivatedRoute,
                private movieService: MovieService,
                private router: Router,
                private dataStorageService: DataStorageService,
                private datePipe: DatePipe) { }

    ngOnInit() {
        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
        this.movieService.genresChanged
            .subscribe(
            (genres: Genre[]) => {
                this.genres = genres;
            });
        this.genres = this.movieService.getGenres();
    }

    onSubmit() {
        const newMovieId = UUID.UUID();
        this.movieRatedBy = localStorage.getItem('username');
        const currentTime = Date.now();
        let timeOfAdding = this.datePipe.transform(currentTime, 'yyyy-MM-dd hh:mm:ss');
        const newMovie = new Movie(newMovieId,
            this.movieForm.value['name'],
            this.movieForm.value['actors'],
            0,
            this.movieForm.value['description'],
            localStorage.getItem('username'),
            0,
            this.movieForm.value['imagePath'],
            timeOfAdding,
            this.movieRatedBy,
            this.movieForm.value['genre']);

        if (this.editMode) {
            this.editMovie = new Movie(this.movieId, this.movieForm.value['name'], this.movieForm.value['actors'],
                this.movieRating, this.movieForm.value['description'], this.movieAddedBy, this.movieNumberOfRatings,
                this.movieForm.value['imagePath'], this.movieTimeOfAdding, this.movieRatedBy, this.movieGenre);

            this.dataStorageService.editMovie(this.id, this.editMovie, this.movieRatedBy);
        } else {
            console.log(newMovie);
            this.dataStorageService.addMovie(newMovie);
                
        }
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    initForm() {
        

        if (this.editMode) {
            const movie = this.movieService.getMovie(this.id);
            this.movieId = movie.id;
            this.movieName = movie.name;
            this.movieImagePath = movie.imagePath;
            this.movieDescription = movie.description;
            this.movieActors = movie.actors;
            this.movieRating = movie.rating;
            this.movieAddedBy = movie.addedBy;
            this.movieTimeOfAdding = movie.timeOfAdding;
            this.movieNumberOfRatings = movie.numberOfRatings;
            this.movieGenre = movie.genre;

        }
        this.movieForm = new FormGroup({
            'name': new FormControl(this.movieName, Validators.required),
            'imagePath': new FormControl(this.movieImagePath, Validators.required),
            'description': new FormControl(this.movieDescription, Validators.required),
            'genre': new FormControl(this.movieGenre, Validators.required),
            'actors': new FormControl(this.movieActors, Validators.required)
        });
    }
}