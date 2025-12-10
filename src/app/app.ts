import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharatersList} from './components/charaters-list/charaters-list';
import {HttpClient} from '@angular/common/http';
import {CharacterService} from './shared/services/character';
import {Characters} from './shared/models/characteres.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CharatersList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  private charactersServices: CharacterService = inject(CharacterService);
  protected characters!: Characters[];
  ngOnInit() {
    this.charactersServices.getCharacters().subscribe((charactersFromApi: Characters[])=> {
     this.characters = charactersFromApi;
    })
  }
}
