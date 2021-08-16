import { MoviesService } from './../movies.service';
import { Component, Input, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../models';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-movie-form',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Input() movie: Movie;
  newMovieForm: FormGroup;

  ngOnInit(): void {
    this.newMovieForm = this.formBuilder.group({
      title: [this.movie?.title ?? '', Validators.required],
      summary: [this.movie?.summary ?? '', Validators.required],
      publishedDate: [this.movie?.publishedDate ?? '', Validators.required],
      image: [this.movie?.image ?? '', Validators.required]
    });
  }


  constructor(private formBuilder: FormBuilder, private moviesService: MoviesService) { }


  onFormSubmitted() {

    const movie: Movie = {
      id: Math.ceil(Math.random() * 1000),
      title: this.newMovieForm.controls['title'].value,
      summary: this.newMovieForm.controls['summary'].value,
      publishedDate: this.newMovieForm.controls['publishedDate'].value,
      image: this.newMovieForm.controls['image'].value
    }
    if (this.movie) {
      movie.id = this.movie.id;

      this.moviesService.updateMovie(this.movie.id, movie);
    } else {
      this.moviesService.addMovie(movie);
    }

    this.newMovieForm.reset();
  }

}
