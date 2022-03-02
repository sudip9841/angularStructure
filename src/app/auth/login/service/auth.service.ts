import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveToken(token:string){
    localStorage.setItem('token',token)
  }
  removeToken()
  {
    localStorage.removeItem('token')
  }

  checkToken()
  {
    if(localStorage.getItem('token'))
    {
      return true
    }
    else{
      return false
    }
  }
}
