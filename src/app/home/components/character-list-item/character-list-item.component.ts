import { Component, Input } from '@angular/core';
import { Character } from '../../../shared/models/character';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-character-list-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './character-list-item.component.html',
  styleUrl: './character-list-item.component.scss'
})
export class CharacterListItemComponent {

  @Input() character!: Character;

}
