import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {
  titleInsideChildComponent = input.required<string>();
}
