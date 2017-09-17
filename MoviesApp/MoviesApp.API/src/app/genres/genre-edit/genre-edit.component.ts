import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieService } from '../../movies/movie.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Genre } from '../../movies/genre.model';
import { Movie } from '../../movies//movie.model';
import { UUID } from 'angular2-uuid';

@Component({
    selector: 'app-genre-edit',
    templateUrl: './genre-edit.component.html'
})
export class GenreEditComponent {

    id: number;
    editMode = false;
    genreForm: FormGroup;
    genres: Genre[];
    selectedGenreId: string;
    editGenre: Genre;

    genreName = '';
    genreId = '';

    constructor(private route: ActivatedRoute,
        private movieService: MovieService,
        private router: Router,
        private dataStorageService: DataStorageService) { }

    ngOnInit() {
        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
            );
    }

    onSubmit() {
        const newGenreId = UUID.UUID();
        const newGenre = new Genre(newGenreId, this.genreForm.value['name']);

        if (this.editMode) {
            this.editGenre = new Genre(this.genreId, this.genreForm.value['name']);

            this.dataStorageService.editGenre(this.id, this.editGenre);
        } else {
            console.log(newGenre);
            this.dataStorageService.addGenre(newGenre);

        }
        this.onCancel();
    }

    onCancel() {
        this.router.navigate(['/genres']);
    }

    initForm() {


        if (this.editMode) {
            const genre = this.movieService.getGenre(this.id);
            this.genreId = genre.id;
            this.genreName = genre.type;

        }
        this.genreForm = new FormGroup({
            'name': new FormControl(this.genreName, Validators.required),
        });
    }
}