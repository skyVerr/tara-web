import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async login(loginForm: NgForm){
    try {
      let loginResponse = await this.authService.login(loginForm.value).toPromise();
      localStorage.setItem('token', loginResponse['token']);
    } catch (error) {
      console.log(error.error.message);
    }
  }

}
