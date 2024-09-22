import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersResponseDTO } from '../../shared/models/character';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl: string = 'http://gateway.marvel.com';
  params: any = {apikey: '62c41ce60162ebd1b09b2a679102fc95'};

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharactersList(): Observable<CharactersResponseDTO> {
    return this.httpClient.get<CharactersResponseDTO>(
      this.baseUrl+'/v1/public/characters',
      {params: this.params}
    );
  }
}
