import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupData = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
  };

  onSignupSubmit() {
    // You can implement sign-up logic here (e.g., API call, store user data, etc.).
    // For simplicity, let's just log the signup data for now.
    console.log('Signup Data:', this.signupData);
  }
}
