import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './models';

export class MoviesService {
  private _movies: Movie[] = [
    {
      id: Math.ceil(Math.random() * 1000),
      title: 'Fs9',
      summary: 'bla bla bla',
      publishedDate: '01/01/2021',
      image: 'unknown',
    },
    {
      id: Math.ceil(Math.random() * 1000),
      title: 'לשחרר את שולי',
      summary: 'blo blo blo',
      publishedDate: '01/09/2021',
      image: 'unknown',
    },
    {
      id: Math.ceil(Math.random() * 1000),
      title: 'יחידת המתאבדים',
      summary: 'ble ble ble',
      publishedDate: '10/01/2021',
      image: 'unknown',
    },
  ];
  private $movies: BehaviorSubject<Movie[]> = new BehaviorSubject(this._movies);

  constructor() {}

  getAllMovies(): Observable<Movie[]> {
    return this.$movies.asObservable();
  }

  addMovie(movie: Movie) {
    this._movies.push(movie);
    this.notifyChanges();
  }

  updateMovie(id: number, movie: Movie) {
    this._movies[id] = movie;
    this.notifyChanges();
  }

  deleteMovie(movie: Movie) {
    const index = this._movies.indexOf(movie);
    if (index > -1) {
      // this._movies = this._movies.splice(index, 1);
      delete this._movies[index];
    }
    // const index = this._movies.indexOf(this._movies[id]);

    this.notifyChanges();
  }

  private notifyChanges() {
    this.$movies.next(this._movies);
  }
}
