import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Observable } from 'rxjs';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { CommonModule } from '@angular/common';
import { Character, CharactersResponseDTO } from '../shared/models/character';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { ScrollTopBtnComponent } from '../shared/components/scroll-top-btn/scroll-top-btn.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharacterListItemComponent,
    ToolbarComponent,
    InfiniteScrollDirective,
    ScrollTopBtnComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  charactersList: Character[] = [];
  charactersSearchResultsList!: Character[];
  totalCharacters!: number;
  offset: number = 0;
  actualPage: number = 0;
  totalPages!: number;
  isLoading: boolean = true;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.loadCharacters();
    //TODO: spinner de carga
  }

  private loadCharacters(): void {
    this.homeService.getCharactersList(this.offset).subscribe({
      next: (characters: CharactersResponseDTO) => {
        this.charactersList.push(...characters.data.results);
        this.isLoading = false;
        if(this.offset === 0) {
          this.totalCharacters = characters.data.total;
          this.totalPages = (this.totalCharacters / characters.data.count) + 1;
        }
      },
      error: (e) => {
      //TODO: show generic error
      },
    });
  }


  searchCharacters(value: string): void {
    this.isLoading = true;
    this.homeService.getCharactersListByName(value).subscribe((characters: CharactersResponseDTO) => {
      this.charactersList = characters.data.results;
      this.isLoading = false;

      //TODO: if results.length == 0, show a text with 'No results'
    },
  (error) => {
    //TODO: show generic error
  });
  }

  onScroll(): void {
    if(this.actualPage < this.totalPages && !this.isLoading) {
      this.isLoading = true;
      this.offset = this.offset + 20;
      this.loadCharacters();
    }
  }

  scrollTop(): void {
    // Safari
    document.body.scrollTop = 0;
    // Other browsers
    document.documentElement.scrollTop = 0;
  }

}
