import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersResponseDTO } from '../../shared/models/character';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl: string = 'http://gateway.marvel.com';
  


  constructor(
    private httpClient: HttpClient
  ) { }

  getCharactersList(offset: number): Observable<CharactersResponseDTO> {
    return this.httpClient.get<CharactersResponseDTO>(
      this.baseUrl + '/v1/public/characters',
      {
        params: {
          offset: offset
        }
      }
    );
  }

  getCharactersListByName(name: string): Observable<CharactersResponseDTO> {
    if (name.length > 0) {
      return this.httpClient.get<CharactersResponseDTO>(
        this.baseUrl + '/v1/public/characters',
        {
          params: {
            nameStartsWith: name
          }
        }
      );
    }
    return this.getCharactersList(0);
  }
  
}
