import { Component, Input } from '@angular/core';
import {Characters} from '../../shared/models/characteres.model';
import {RouterOutlet} from '@angular/router';
import { EmojiPipe } from '../../shared/pipes/nom-de-la-pipe-pipe';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-charaters-list',
  imports: [
    RouterOutlet,CommonModule, EmojiPipe
  ],
  templateUrl: './charaters-list.html',
  styleUrl: './charaters-list.scss',
})
export class CharatersList {
  @Input() charactersFromApi: Characters[] = [];
}
