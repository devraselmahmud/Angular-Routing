import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor (private authService: AuthService) { }

  ngOnInit(): void { }

  logout(): void {
    this.authService.logout();
  }

}
