import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviceses/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private authService : AuthService,
    private router : Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.authDetails = null;
    this.router.navigate(['/login']);
  }
}
