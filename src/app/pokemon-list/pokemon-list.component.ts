import { Component, inject } from '@angular/core';
import { PokemonServiceService } from '../service/pokemon-service.service';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatListModule,
    MatGridListModule,
    PokemonComponent,
    MatCardModule,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  pokemonSvc = inject(PokemonServiceService);
  pokemonList: any = [];
  selectedPokemon: any = null;

  constructor() {
    this.getPokemonList();
  }

  clickItem(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  deletePokemon(pokemon: any) {
    this.pokemonList = this.pokemonList.filter(
      (p: any) => p.name !== pokemon.name
    );
  }

  async getPokemonList() {
    this.pokemonList = await this.pokemonSvc.getPokemonList();
    console.log(this.pokemonList);
  }

  async getNextPokemonList() {
    this.pokemonList = await this.pokemonSvc.getNextPokemonList();
  }

  async getPreviousPokemonList() {
    this.pokemonList = await this.pokemonSvc.getPreviousPokemonList();
  }
}
