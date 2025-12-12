import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharatersList} from './components/charaters-list/charaters-list';
import { ContinentsList } from './components/continents-list/continents-list';
import { CharacterService } from './shared/services/character';
import { Characters } from './shared/models/characteres.model';
import { Continent } from './shared/models/continent.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharatersList, ContinentsList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  private charactersServices: CharacterService = inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);

  protected characters: Characters[] = [];
  protected continents: Continent[] = [];
  protected searchQuery: string = '';

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
