import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signupForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private http  :HttpClient,private router:Router)
  {


  }
  ngOnInit(): void {
  //   this.signupForm=this.formbuilder.group()
  //   uname:[''],
  //   psw:['']
  // }
  // signup()
  // {
  //   this.http.post<any>('http://localhost:3000/employee',this.signupForm.value).subscribe(res=>{
  //     alert
  //   })
  }

}
