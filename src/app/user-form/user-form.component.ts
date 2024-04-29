import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  public inputMessage = '';
  isButtonDisabled = false;

  input(event: Event): void {
    // const target = event.target as HTMLInputElement;
    // this.inputMessage = target.value;
  }

  saveData(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const form = target.parentElement as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    this.inputMessage = input.value;

    // this.isButtonDisabled = true;
  }

  constructor() {
    //   setTimeout(() => {
    //     this.isButtonDisabled = true;
    //   }, 1000);
  }
}
