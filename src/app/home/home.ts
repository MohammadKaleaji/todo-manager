import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Title } from '../components/title/title';
import { Tracker } from '../components/tracker/tracker';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, Title, Tracker, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})        
export class Home {
  protected readonly title = signal('Hello from app.ts component');
  keyUpHandler(event: KeyboardEvent) {
    console.log("Key pressed:", event.key);
//     console.log("Key code:", event.code);
//     console.log("Ctrl pressed:", event.ctrlKey);
//     console.log("Shift pressed:", event.shiftKey);
//     console.log("Alt pressed:", event.altKey);
  }
}
//************************************************************************** */
// make the routerlink in a haeder that appears in all pages
//************************************************************************** */
