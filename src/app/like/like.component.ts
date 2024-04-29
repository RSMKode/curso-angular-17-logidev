import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <img src="assets/like.svg" alt="like" />
    </div>
  `,
  styles: `.container {color:white;}`,
  // templateUrl: './like.component.html',
  // styleUrl: './like.component.scss'
})
export class LikeComponent {}
