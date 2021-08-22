import { MoviesService } from './../movies.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
  // providers: [MoviesService]
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieChanged = new EventEmitter<Movie>();

  updateMode: boolean = false;
  
//   profileFormUpdate = this.fb.group({
//     title: ['', Validators.required],
//     summary: ['', Validators.required],
//     publishedDate: ['', Validators.required],
//     image: ['', Validators.required]
//   })

  constructor(private moviesServices: MoviesService) { }

  //   constructor(private moviesService: MoviesService, private fb: FormBuilder) {
//    }

  ngOnInit(): void {
  }

//   onSetTo( title: string, summary: string, publishedDate: string, image: string) {
//     this.moviesService.updateMovie(this.movie.id, this.movie)
    // this.loggingService.logStatusChange(status);
//   }

  onMovieDeleted() {
    this.moviesService.deleteMovie(this.movie);
  }

  setUpdateMode(val: boolean) {
    this.updateMode = val;
  }

}
