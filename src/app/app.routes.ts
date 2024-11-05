import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'; 
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';

export const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'create-pokemon/:id', component: PokemonCreateComponent }, 
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '**', redirectTo: '/pokemons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
