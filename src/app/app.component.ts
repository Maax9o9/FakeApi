import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details-component/pokemon-details-component.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PokemonCreateComponent } from './components/pokemon-create/pokemon-create.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PokemonListComponent,
    PokemonDetailsComponent,
    NavBarComponent,
    PokemonCreateComponent,
    RouterModule
  ],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Poke';
}
