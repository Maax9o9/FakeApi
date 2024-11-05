import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponentComponent } from './pokemon-details-component.component';

describe('PokemonDetailsComponentComponent', () => {
  let component: PokemonDetailsComponentComponent;
  let fixture: ComponentFixture<PokemonDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
