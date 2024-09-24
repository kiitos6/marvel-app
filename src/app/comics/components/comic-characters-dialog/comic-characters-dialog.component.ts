import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../../shared/models/character';
import { CharacterListItemComponent } from '../../../home/components/character-list-item/character-list-item.component';
import { Comic } from '../../../shared/models/comic';

@Component({
  selector: 'app-comic-characters-dialog',
  standalone: true,
  imports: [
    CharacterListItemComponent
  ],
  templateUrl: './comic-characters-dialog.component.html',
  styleUrl: './comic-characters-dialog.component.scss'
})
export class ComicCharactersDialogComponent {

  readonly dialogRef = inject(MatDialogRef<ComicCharactersDialogComponent>);
  readonly characters = inject<Character[]>(MAT_DIALOG_DATA);
  readonly characterModel = model(this.characters);

}
