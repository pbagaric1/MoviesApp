import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie.model';
import { Genre } from '../movies/genre.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataStorageService {

    constructor(private http: Http,
        private route: ActivatedRoute,
        private movieService: MovieService) {
    }

    id: number;
    movieId: string;

    ngOnInit() {
    }

    getMovies() {
        this.http.get('http://localhost:55840/api/movie/getall')
            .subscribe(
            (response: Response) => {
                const movies: Movie[] = response.json();
                this.movieService.setMovies(movies);

            }
        );
    }
    getGenres() {
        return this.http.get('http://localhost:55840/api/genre/getall')
                .subscribe(
                (response: Response) => {
                    const genres: Genre[] = response.json();
                    this.movieService.setGenres(genres);

                }
                );
        }

    getMoviesOrderedByRating() {
        return this.http.get('http://localhost:55840/api/movie/bestrated')
            .map(res => res.json());
    }
   

    addMovie(movie: Movie) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('auth_token');
        headers.append('Authorization' , 'Bearer ' + token);
        console.log(headers);
        return this.http.post('http://localhost:55840/api/movie/add', movie, { headers: headers })
            .subscribe(
            (res) => {
                this.movieService.addMovie(movie);
                console.log(res);
            },
            (error) => {
                console.log(error);
                window.alert(error.statusText);
            }
            );
    }

    addGenre(genre: Genre) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
        console.log(headers);
        return this.http.post('http://localhost:55840/api/genre/add', genre, { headers: headers })
            .subscribe(
            (res) => {
                this.movieService.addGenre(genre);
                console.log(res);
            },
            (error) => {
                console.log(error);
                window.alert(error.statusText);
            }
            );
    }

    editMovie(id: number, movie: Movie, user: string) {
        console.log(movie);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);
         
        return this.http.put('http://localhost:55840/api/movie/edit?id=' + movie.id, { movie: movie, user: user }, { headers: headers })
            .subscribe(
            (res) => {
                this.movieService.updateMovie(id, movie);
                console.log(res);

            },
            (error) => {
                console.log(error);
                window.alert(error.statusText);
            }
            );
    }

    editGenre(id: number, genre: Genre) {
        console.log(genre);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);

        return this.http.put('http://localhost:55840/api/genre/edit?id=' + genre.id, genre, { headers: headers })
            .subscribe(
            (res) => {
                this.movieService.updateGenre(id, genre);
                console.log(res);

            },
            (error) => {
                console.log(error);
                window.alert(error.statusText);
            }
            );
    }

    editRating(id: number, movie: Movie, userRated: any) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);


        return this.http.post('http://localhost:55840/api/rating/add', {movie: movie, userRated: userRated}, { headers: headers })
            .subscribe(
            (res) => {
                window.alert("Thanks for rating this movie!");
                this.http.get('http://localhost:55840/api/movie/get?id=' + movie.id)
                    .subscribe(
                    (res) => {
                        const updatedMovie: Movie = res.json();
                        this.movieService.updateMovie(id, updatedMovie);
                    })
                //const updatedMovie: Movie = res.json();
                
            },
            (error) => {
                console.log(error);
                window.alert(error.statusText);
            }
            );
    }

    deleteMovie(id: number, user: string) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('auth_token');
        headers.append('Authorization', 'Bearer ' + token);

        const movie: Movie = this.movieService.getMovie(id); 
        console.log(movie);
        return this.http.delete('http://localhost:55840/api/movie/delete?id=' + movie.id + '&user=' + user, { headers: headers })
            .subscribe(
            (res) => {
                this.movieService.deleteMovie(id);

            },
            (error) => {
                console.log(error);
                window.alert(error.statusText);
            }
            );
        
    }


    getUserRating(id: number, movieId: any, userRated: string) {

        return this.http.get('http://localhost:55840/api/rating/getuserrating?movieId='+movieId+'&userRated='+userRated)
            .map(res => res.json());
    }
}