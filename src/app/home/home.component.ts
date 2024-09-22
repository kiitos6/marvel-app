import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Observable } from 'rxjs';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { CommonModule } from '@angular/common';
import { Character, CharactersResponseDTO } from '../shared/models/character';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterListItemComponent, CommonModule, ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  charactersList!: Character[];
  charactersSearchResultsList!: Character[];

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.loadCharacters();
    //TODO: spinner de carga
  }

  private loadCharacters(): void {
    this.homeService.getCharactersList().subscribe((characters: CharactersResponseDTO) => {
      this.charactersList = characters.data.results;
    },
  (error) => {
    //TODO: show generic error
  });
  }

  searchCharacters(value: string): void {
    this.homeService.getCharactersListByName(value).subscribe((characters: CharactersResponseDTO) => {
      this.charactersList = characters.data.results;
      //TODO: if results.length == 0, show a text with 'No results'
    },
  (error) => {
    //TODO: show generic error
  });
  }

}
