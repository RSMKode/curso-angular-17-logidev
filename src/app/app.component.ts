import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnlyTextDirective } from './directives/only-text.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OnlyTextDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputText = '';
}
