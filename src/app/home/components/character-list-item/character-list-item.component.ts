import { Component, inject, Input } from '@angular/core';
import { Character } from '../../../shared/models/character';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog';
import { CharacterDetailsDialogComponent } from '../character-details/character-details.component';

@Component({
  selector: 'app-character-list-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './character-list-item.component.html',
  styleUrl: './character-list-item.component.scss'
})
export class CharacterListItemComponent {

  readonly detailsDialog = inject(MatDialog);

  @Input() character!: Character;

  openDetailsDialog(): void {
    console.log(this.character)
    this.detailsDialog.open(CharacterDetailsDialogComponent, {
      data: this.character
    });
    
  }

}
