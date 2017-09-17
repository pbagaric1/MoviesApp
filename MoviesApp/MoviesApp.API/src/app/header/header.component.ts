import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { MovieService } from '../movies/movie.service';
import { Genre } from '../movies/genre.model';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    constructor(private dataStorageService: DataStorageService,
        private movieService: MovieService,
        private authService: AuthService) { }

    genres: Genre[];
    selectedGenre: Genre;
    loggedUser: string = localStorage.getItem('username');

    ngOnInit() {
        this.authService.userChanged.subscribe(loggedUser => {
            this.loggedUser = loggedUser;
        })
        this.dataStorageService.getGenres();
    }

    onLogout() {
        this.authService.logOut();
    }
}