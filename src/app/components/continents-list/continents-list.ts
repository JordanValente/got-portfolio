import { Component,Input } from '@angular/core';
import {Continent} from '../../shared/models/continent.model';

@Component({
  selector: 'app-continents-list',
  imports: [],
  standalone: true,
  templateUrl: './continents-list.html',
  styleUrl: './continents-list.scss',
})
export class ContinentsList {
  @Input() continentsFromApi: Continent[] = [];
}
