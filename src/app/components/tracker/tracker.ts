import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tracker',
  imports: [],
  templateUrl: './tracker.html',
  styleUrl: './tracker.scss'
})
export class Tracker {
  steps = signal(0);
  decrement() {
    if (this.steps() > 0) {
      this.steps.update(prev => prev - 1);
    }
  }
  increment() {
    this.steps.update(prev => prev + 1);
  }
  reset() {
    this.steps.set(0);
  }
}

// [ set ] better used when the signal is gonna be updated just few times
// [update ] better used when the signal is gonna be updated many times
