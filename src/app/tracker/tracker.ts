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
    this.steps.update(prev => prev - 1);
  }
  increment() {
    this.steps.update(prev => prev + 1);
  }
}
