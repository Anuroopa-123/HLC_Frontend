import { Component } from '@angular/core';

@Component({
  selector: 'app-committeemembers',
  imports: [],
  templateUrl: './committeemembers.html',
  styleUrl: './committeemembers.css'
})
export class Committeemembers {
  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
