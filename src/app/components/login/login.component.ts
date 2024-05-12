import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
      if(this.authService.isLoggedIn()) {
        this.router.navigate(['/admin']);
      }
  }

  onSubmit (): void {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (result) => {
          console.log(result);
          this.toastr.success('Successfully logged in.', 'Success');
          this.router.navigate(['/admin']);
        },
        error: (err: Error) => {
          this.toastr.error(err.message, 'Error');
        }
      });
    }
  }

}
