import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../../shared/components/generic-dialog/generic-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  readonly detailsDialog = inject(MatDialog);

  constructor() { }

  showGenericError(title: string, description: string): void {
    this.detailsDialog.open(GenericDialogComponent, {
      data: {
        title: title,
        description: description
      }
    });
  }
}
