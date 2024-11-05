import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonAbility, PokemonGameIndex, PokemonType } from '../../models/pokemon.service';

@Component({
  standalone: true,
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.scss'],
  imports: [CommonModule]
})
export class PokemonCreateComponent implements OnInit {
  pokemon!: Pokemon; 

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id'); 
    if (pokemonId) {
      this.fetchPokemon(pokemonId);
    }
  }

  fetchPokemon(id: string) {
    this.pokemonService.getPokemonById(Number(id)).subscribe({
      next: (pokemon: Pokemon) => {
        this.pokemon = pokemon; 
      },
      error: (error: any) => { 
        this.snackBar.open('Error al cargar el Pokémon', 'Cerrar', {
          duration: 2000,
        });
        console.error('Error al cargar Pokémon:', error);
      }
    });
  }

  getTypeNames(): string {
    return this.pokemon.types.map((type: PokemonType) => type.type.name).join(', ');
  }

  getAbilityNames(): string {
    return this.pokemon.abilities.map((ability: PokemonAbility) => ability.ability.name).join(', ');
  }

  getGameIndices(): string {
    return this.pokemon.game_indices.map((game: PokemonGameIndex) => game.version.name).join(', ');
  }
}
