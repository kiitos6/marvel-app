import { Component, inject, Input } from '@angular/core';
import { Comic } from '../../../shared/models/comic';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ComicCharactersDialogComponent } from '../comic-characters-dialog/comic-characters-dialog.component';
import { ComicsService } from '../../service/comics.service';
import { Character, CharactersResponseDTO } from '../../../shared/models/character';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-comic-list-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './comic-list-item.component.html',
  styleUrl: './comic-list-item.component.scss'
})
export class ComicListItemComponent {

  @Input() comic!: Comic;
  readonly detailsDialog = inject(MatDialog);
  isLoading: boolean = false;
  

  constructor(
    private comicService: ComicsService
  ) {}


  getComicCharacters(): void {
    this.isLoading = true;
    this.comicService.getComicCharacters(this.comic.characters.collectionURI).subscribe({
      next: (characters: CharactersResponseDTO) => {
        this.openCharactersDialog(characters.data.results);
        this.isLoading = false;

      },
      error: (e) => {
      //TODO: show generic error
      }
    })

  }

  openCharactersDialog(characters: Character[]): void {
    this.detailsDialog.open(ComicCharactersDialogComponent, {
      data: characters,
      height: '70vh',
      maxHeight: '85vh',
      width: '85vw',
      maxWidth: '85vw',
    });
  }

}
