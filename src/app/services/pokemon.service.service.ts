import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'; 
  private pokemonsSubject = new BehaviorSubject<Pokemon[]>([]);
  pokemons$ = this.pokemonsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=100`);
  }

  getPokemonById(id: number | string): Observable<any> {  
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  setPokemons(pokemons: Pokemon[]): void {
    this.pokemonsSubject.next(pokemons);
  }
}
