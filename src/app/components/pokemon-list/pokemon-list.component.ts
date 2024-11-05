import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon.service';
import { PokemonService } from '../../services/pokemon.service.service';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router'; 
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatIconModule,
    UpperCasePipe,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  displayedColumns: string[] = ['sprite', 'name', 'types', 'abilities', 'games'];
  dataSource = new MatTableDataSource<Pokemon>();

  constructor(private pokemonService: PokemonService, private router: Router) {} 

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.pokemonService.getAllPokemons().subscribe(
      response => {
        const pokemonObservables: Observable<Pokemon>[] = response.results.map((pokemon: any) => 
          this.pokemonService.getPokemonById(pokemon.name)
        );

        forkJoin(pokemonObservables).subscribe(
          (pokemons) => {
            const pokemonData: Pokemon[] = pokemons.map(pokemon => ({
              id: pokemon.id,
              name: pokemon.name,
              types: pokemon.types.map((t: any) => t.type.name),
              abilities: pokemon.abilities.map((a: any) => a.ability.name),
              game_indices: pokemon.game_indices.map((g: any) => g.version.name),
              sprites: {
                front_default: pokemon.sprites.front_default,
                back_default: pokemon.sprites.back_default
              }
            }));
            
            this.dataSource.data = pokemonData;
          },
          (error) => {
            console.error('Error al cargar los detalles de los Pokémon', error);
          }
        );
      },
      (error) => {
        console.error('Error al cargar la lista de Pokémon', error);
      }
    );
  }

  // Agrega este método para manejar la navegación al crear Pokémon
  navigateToPokemonCreate(pokemonId: number): void {
    this.router.navigate(['/create-pokemon', pokemonId]);
  }
}
