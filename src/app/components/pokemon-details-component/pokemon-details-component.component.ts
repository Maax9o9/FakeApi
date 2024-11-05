import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './pokemon-details-component.component.html',
  styleUrls: ['./pokemon-details-component.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonId!: number;  
  pokemon: any;  

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemonDetails();
  }

  fetchPokemonDetails() {
    if (this.pokemonId) {
      this.pokemonService.getPokemonById(this.pokemonId).subscribe((data: any) => {
        this.pokemon = {
          name: data.name,
          height: data.height,
          weight: data.weight,
          types: data.types.map((t: any) => t.type.name).join(', '), 
        };
      });
    }
  }
}
