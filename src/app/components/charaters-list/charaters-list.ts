import { Component, Input } from '@angular/core';
import {Characters} from '../../shared/models/characteres.model';

@Component({
  selector: 'app-charaters-list',
  imports: [],
  templateUrl: './charaters-list.html',
  styleUrl: './charaters-list.scss',
})
export class CharatersList {
  @Input() charactersFromApi: Characters[] = [];
}
