import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // onSelectHero(_t5: Hero) {
  //   throw new Error('Method not implemented.');
  // }
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // hero = 'Windstorm';
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
