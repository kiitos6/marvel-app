import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersResponseDTO } from '../../shared/models/character';
import { ComicsResponseDTO } from '../../shared/models/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  baseUrl: string = 'http://gateway.marvel.com';


  constructor(
    private httpClient: HttpClient
  ) { }


  getComicList(offset: number): Observable<ComicsResponseDTO> {
    return this.httpClient.get<ComicsResponseDTO>(
      this.baseUrl + '/v1/public/comics',
      {
        params: {
          offset: offset
        }
      }
    );
  }

  getComicCharacters(url: string): Observable<CharactersResponseDTO> {
    return this.httpClient.get<CharactersResponseDTO>(
      url, 
      {
        params: {
          limit: 100
        }
      }
    );
  }

}
