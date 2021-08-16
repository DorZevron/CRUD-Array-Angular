import { MoviesService } from './movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MoviesService],
})
export class AppComponent implements OnInit {
  // title = 'MigdalProject2';

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  //   onAddMovie(newMovie: {title: string, summary: string, publishedDate: string, image: string}) {
  //     this.movies.push(newMovie);
  // }

  onMovieChanged(updateInfo: Movie) {}
}
