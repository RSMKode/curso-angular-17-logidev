import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridContainerModule } from './grid-container/grid-container.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridContainerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'curso-angular-17-logidev';
  description = 'Curso de Angular 17';
}
