import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Characters} from '../models/characteres.model';
import {Observable} from 'rxjs';
import {Continent} from '../models/continent.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = 'https://thronesapi.com/api/v2/Characters';
  private continentURL = 'https://thronesapi.com/api/v2/Continents';
  private httpClient = inject(HttpClient);





  public getCharacters() :  Observable<Characters[]> {
    return this.httpClient.get<Characters[]>(this.charactersUrl);
  }
  public getContinents(): Observable<Continent[]> {
    return this.httpClient.get<Continent[]>(this.continentURL);
  }
}
