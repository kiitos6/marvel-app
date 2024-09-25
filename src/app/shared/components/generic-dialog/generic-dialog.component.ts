import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogClose, MatDialogActions, MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { GenericDialog } from '../../models/dialog';

@Component({
  selector: 'app-generic-dialog',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent
  ],
  templateUrl: './generic-dialog.component.html',
  styleUrl: './generic-dialog.component.scss'
})
export class GenericDialogComponent {

  readonly dialogRef = inject(MatDialogRef<GenericDialogComponent>);
  readonly dialogData = inject<GenericDialog>(MAT_DIALOG_DATA);
  readonly characterModel = model(this.dialogData);

}
