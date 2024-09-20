import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Observable } from 'rxjs';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterListItemComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  charactersListResponse$!: Observable<any>
  charactersList!: any[];

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {

    this.charactersListResponse$ = this.homeService.getCharactersList();
    this.homeService.getCharactersList().subscribe((characters: any) => {
      console.log(characters);
      this.charactersList = characters.data.results;
    });
  }

}
