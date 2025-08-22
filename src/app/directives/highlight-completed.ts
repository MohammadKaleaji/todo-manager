import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleted]'
})
export class HighlightCompleted {

  constructor() { }
  isCompleted = input.required<boolean>();
  el = inject(ElementRef);

  styleEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
    else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  });
}
