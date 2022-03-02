import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  constructor(public fb:FormBuilder) {
    this.registerForm = this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
   }

   get registerControl()
   {
     return this.registerForm.controls;
   }

   submitFormData()
   {
     if(this.registerForm.valid)
     {
       console.log(this.registerForm.value)
       this.registerForm.reset()
     }
    
   }

  ngOnInit(): void {
  }

}
