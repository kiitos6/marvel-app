import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Observable } from 'rxjs';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { CommonModule } from '@angular/common';
import { CharactersResponseDTO } from '../shared/models/character';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterListItemComponent, CommonModule, ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  charactersListResponse$!: Observable<any>
  charactersList!: any[];

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters(): void {
    this.charactersListResponse$ = this.homeService.getCharactersList();
    this.homeService.getCharactersList().subscribe((characters: CharactersResponseDTO) => {
      console.log(characters);
      this.charactersList = characters.data.results;
    },
  (error) => {
    //TODO: show generic error
  });
  }

}
