import { Component, inject, model } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogClose, MatDialogActions} from '@angular/material/dialog';
import { Character } from '../../../shared/models/character';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogClose,
    MatDialogActions
  ],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss'
})
export class CharacterDetailsDialogComponent {

  readonly dialogRef = inject(MatDialogRef<CharacterDetailsDialogComponent>);
  readonly character = inject<Character>(MAT_DIALOG_DATA);
  readonly characterModel = model(this.character);

}
