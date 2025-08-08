import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-otp',
  imports: [CommonModule,FormsModule],
  templateUrl: './get-otp.html',
  styleUrl: './get-otp.css'
})
export class GetOtp  implements AfterViewInit{
  otpDigits: string[] = ['', '', '', '', '', ''];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const firstInput = document.querySelector('.otp-box input') as HTMLInputElement;
    if (firstInput) {
      firstInput.focus();
    }
  }
  onOtpChange(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (/^[0-9]$/.test(value)) {
      this.otpDigits[index] = value;

      const inputs = document.querySelectorAll('.otp-box input');
      if (index + 1 < inputs.length) {
        (inputs[index + 1] as HTMLInputElement).focus();
      }

      if (this.otpDigits.every(d => d !== '')) {
        const otp = this.otpDigits.join('');
        console.log('Complete OTP:', otp);

        // Navigate to the register route after short delay (optional)
        setTimeout(() => {
          this.router.navigate(['/register']);
        }, 200);
      }
    } else {
      this.otpDigits[index] = '';
      input.value = '';
    }
  }

  onBackspace(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && !input.value && index > 0) {
      const inputs = document.querySelectorAll('.otp-box input');
      (inputs[index - 1] as HTMLInputElement).focus();
    }
  }

}
