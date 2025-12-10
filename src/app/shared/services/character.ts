import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Characters} from '../models/characteres.model';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characterURL : string= "https://thronesapi.com/api/v2/Characters";
  private httpClient : HttpClient = inject(HttpClient);
 public getCharacters(): Observable<Characters[]> {
   return this.httpClient.get<Characters[]>(this.characterURL);
 }
}
