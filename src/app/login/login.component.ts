import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  onLoginSubmit() {
    // You can implement authentication logic here (e.g., API call, check credentials, etc.).
    // For simplicity, let's just log the login data for now.
    console.log('Login Data:', this.loginData);
  }
}
