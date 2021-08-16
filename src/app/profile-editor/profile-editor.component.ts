import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    title: ['', Validators.required],
    summary: ['', Validators.required],
    publishedDate: ['', Validators.required],
    image: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private moviesService: MoviesService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);

    // this.moviesService.addMovie();
  }
}
