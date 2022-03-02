import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(public fb:FormBuilder, public router: Router, public authService:AuthService) {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }

   get loginControl()
   {
     return this.loginForm.controls;
   }

   submitFormData()
   {
     if(this.loginForm.valid)
     {
       console.log(this.loginForm.value)
      //  localStorage.setItem('token',this.loginForm.value.username)
       this.authService.saveToken(this.loginForm.value.username)
       this.loginForm.reset()
       this.router.navigate(['/featured'])
     }
    
   }

  ngOnInit(): void {
  }

}
