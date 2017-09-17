import { Injectable, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { Subject } from 'rxjs/Subject';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Genre } from './genre.model';

@Injectable()
export class MovieService implements OnInit{
    constructor() {}
    moviesChanged = new Subject<Movie[]>();
    genresChanged = new Subject<Genre[]>();
    movieChanged = new Subject<Movie>();

    movieId: string;
    movies: Movie[] = [
    ];
    genres: Genre[] = [
    ];
    ngOnInit() {
    }

    getMovies() {
        
        return this.movies.slice();
    }

    getGenres() {

        return this.genres.slice();
    }

    setMovies(movies : Movie[]) {
        this.movies = movies;
        this.moviesChanged.next(this.movies.slice());
    }

    setGenres(genres: Genre[]) {
        this.genres = genres;
        this.genresChanged.next(this.genres.slice());
    }

    setMovie(movie: Movie, index: number) {
        this.movies[index] = movie;
        this.moviesChanged.next(this.movies.slice());
    }

    getMovie(index: number) {
        return this.movies[index];
    }

    getGenre(index: number) {
        return this.genres[index];
    }

    addMovie(movie: Movie) {
        this.movies.push(movie);
        this.moviesChanged.next(this.movies.slice());
    }

    addGenre(genre: Genre) {
        this.genres.push(genre);
        this.genresChanged.next(this.genres.slice());
    }

    updateMovie(index: number, newMovie: Movie) {
        this.movies[index] = newMovie;
        this.moviesChanged.next(this.movies.slice());
        this.movieChanged.next(this.movies[index]);
    }


    updateGenre(index: number, newGenre: Genre) {
        this.genres[index] = newGenre;
        this.genresChanged.next(this.genres.slice());
    }

    deleteMovie(index: number) {
        this.movies.splice(index, 1);
        this.moviesChanged.next(this.movies.slice());
    }
}