import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(public fb:FormBuilder) {
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
       localStorage.setItem('token',this.loginForm.value.username)
       this.loginForm.reset()
     }
    
   }

  ngOnInit(): void {
  }

}
