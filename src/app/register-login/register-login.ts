import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './register-login.html',
  styleUrl: './register-login.css'
})
export class RegisterLogin {
  mobileNumber: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Submitted number:', this.mobileNumber);
    if (this.mobileNumber && this.mobileNumber.length === 10) {
      this.router.navigate(['/get-otp']);
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  }
}
