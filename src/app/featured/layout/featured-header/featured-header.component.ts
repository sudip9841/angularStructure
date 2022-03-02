import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/login/service/auth.service';

@Component({
  selector: 'app-featured-header',
  templateUrl: './featured-header.component.html',
  styleUrls: ['./featured-header.component.css']
})
export class FeaturedHeaderComponent implements OnInit {

  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.authService.removeToken()
    this.router.navigate(['/auth/login'])
  }

}
