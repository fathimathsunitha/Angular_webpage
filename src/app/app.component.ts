import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapi';

  constructor(private http : HttpClient)
  {

  }
  posts : any[] = []
  loadpost()
  {
    this.http.get('http://localhost:8080/allBooks').subscribe((post:any)=>
    {
      this.posts=post
    });

  }
}
