import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrl: './grid-container.component.scss',
})
export class GridContainerComponent {
  inputName = '';

  clickButton() {
    this.inputName = 'Hello, ' + this.inputName + '!';
  }
}
