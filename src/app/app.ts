import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from './title/title';
import { Tracker } from './tracker/tracker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, Tracker],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Hello from app.ts component');
  keyUpHandler(event: KeyboardEvent) {
    console.log("Key pressed:", event.key);
//     console.log("Key code:", event.code);
//     console.log("Ctrl pressed:", event.ctrlKey);
//     console.log("Shift pressed:", event.shiftKey);
//     console.log("Alt pressed:", event.altKey);
 }}
