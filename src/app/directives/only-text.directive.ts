import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  standalone: true,
})
export class OnlyTextDirective {
  private element: ElementRef<HTMLInputElement> = inject(ElementRef);
  private ngControl = inject(NgControl);

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    const inputElement = event.target as HTMLInputElement;
    const regex = /[^a-zA-Z\s]/g;
    inputElement.value = inputElement.value.replace(regex, '');
    console.log(inputElement.value);
  }

  constructor() {}
}
