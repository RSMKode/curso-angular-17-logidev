import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '../constants/constants';
import { PokemonList } from '../models/pokemonApi';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private http = inject(HttpClient);
  private responseCount = 20;
  responseOffset = 0;

  private pokemonListResponse: PokemonList = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };

  pokemonList = this.pokemonListResponse.results;

  constructor() {}

  public async getPokemonListResponse() {
    const apiSufix = `/pokemon?offset=${this.responseOffset}&limit=${this.responseCount}`;
    const response = await fetch(API_URL + apiSufix);
    const data = await response.json();
    this.pokemonListResponse = data;
  }

  public async getPokemonList() {
    await this.getPokemonListResponse();
    const results = this.pokemonListResponse.results;
    const mappedResults = results.map(async (pokemon: any) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });
    return Promise.all(mappedResults);
  }

  public async getNextPokemonList() {
    if (
      this.responseOffset + this.responseCount >=
      this.pokemonListResponse.count
    ) {
      return this.pokemonListResponse.results;
    }
    this.responseOffset += this.responseCount;
    return await this.getPokemonList();
  }

  public async getPreviousPokemonList() {
    this.responseOffset -= this.responseCount;
    if (this.responseOffset < 0) {
      this.responseOffset = 0;
    }
    return await this.getPokemonList();
  }

  public async getPokemon() {
    await this.getPokemonListResponse();
    return this.pokemonListResponse.results;
  }
}
