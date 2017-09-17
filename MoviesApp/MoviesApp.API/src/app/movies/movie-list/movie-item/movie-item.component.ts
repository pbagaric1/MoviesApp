import { Component, Input, EventEmitter } from '@angular/core';

import { Movie } from '../../movie.model';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html'
})
export class MovieItemComponent {
    @Input() movie: Movie;
    @Input() index: number;

    starsCount: number = 1;
}