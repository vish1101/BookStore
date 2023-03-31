import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  email!:string;
  password!:string;
  showLoginFoem: boolean = true;
iscorrect:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
    })

  }
  onloginHandler(d:any){
     if(((this.loginForm.controls['email'].value) === 'user@user.com') && ((this.loginForm.controls['password'].value) === '8ed46d8')){
        this.router.navigate(['welcome'])
        this.showLoginFoem = false;
      }else{
        this.iscorrect = true;
      }
  }
 get emailControl(){
  return this.loginForm.get('email')
 }
 get passwordControl(){
  return this.loginForm.get('password')
 }
}
