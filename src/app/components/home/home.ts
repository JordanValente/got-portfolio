
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharatersList} from './components/charaters-list/charaters-list';
import { ContinentsList } from './components/continents-list/continents-list';
import { CharacterService } from './shared/services/character';
import { Characters } from './shared/models/characteres.model';
import { Continent } from './shared/models/continent.model';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CharatersList,
    ContinentsList,
    RouterOutlet
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private charactersServices: CharacterService = inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);

  protected characters: Characters[] = [];
  protected continents: Continent[] = [];
  protected searchQuery: string = '';
  protected colorCrimson: string ='blue' ;
  protected isActive: boolean = false;

  toggle(): void {
    this.isActive = !this.isActive;
  }

  get filteredCharacters(): Characters[] {
    return this.characters.filter((character) =>
      typeof character.fullName === 'string' &&
      character.fullName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  ngOnInit() {
    this.charactersServices.getCharacters().subscribe((charactersFromApi: Characters[]) => {
      console.log('Personnages reçus :', charactersFromApi);
      this.characters = charactersFromApi;
      this.cdr.detectChanges();
    });

    this.charactersServices.getContinents().subscribe((continentsFromApi: Continent[]) => {
      console.log('Continents reçus :', continentsFromApi);
      this.continents = continentsFromApi;
      this.cdr.detectChanges();
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
  }
}

