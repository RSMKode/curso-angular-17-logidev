import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { PokemonServiceService } from '../service/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButton],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  @Input({ required: true }) pokemon: any;
  @Output() deletePokemon = new EventEmitter<any>();
}
