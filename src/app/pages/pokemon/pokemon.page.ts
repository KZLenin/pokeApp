import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [PokemonService, HttpClient],
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage {
  pokemonName = '';
  pokemon: any = null;
  pokemonList: any[] = [];
  offset = 0;
  limit = 10; 

  constructor(private pokeService: PokemonService) {
    this.loadPokemons();
  }

  searchPokemon() {
    if (!this.pokemonName) return;
    this.pokeService.getPokemonByName(this.pokemonName).subscribe({
      next: (data: any) => this.pokemon = data,
      error: () => {
        this.pokemon = null;
        alert('Pokémon no encontrado');
      }
    });
  }

  loadPokemons() {
    this.pokeService.getPokemonList(this.limit, this.offset).subscribe({
      next: (data: any) => {
        this.pokemonList = data.results;
      },
      error: (err) => console.error(err)
    });
  }

  loadNext() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  loadPrevious() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  canGoPrevious(): boolean {
    return this.offset > 0;
  }
}