import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../movies/movie.service';
import { Genre } from '../../movies/genre.model';

@Component({
    selector: 'app-genre-list',
    templateUrl: './genre-list.component.html'
})
export class GenreListComponent implements OnInit {
    constructor(private movieService: MovieService,
                private router: Router,
                private route: ActivatedRoute,) { }

    genres: Genre[];

    ngOnInit() {
        this.movieService.genresChanged
            .subscribe(
            (genres: Genre[]) => {
                this.genres = genres;
            });
        this.genres = this.movieService.getGenres();
        console.log(this.genres);
    }


    onNewGenre() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
}