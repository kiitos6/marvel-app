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
  apikey: string = '62c41ce60162ebd1b09b2a679102fc95';


  constructor(
    private httpClient: HttpClient
  ) { }


  getComicList(offset: number): Observable<ComicsResponseDTO> {
    return this.httpClient.get<ComicsResponseDTO>(
      this.baseUrl + '/v1/public/comics',
      {
        params: {
          apikey: this.apikey,
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
          apikey: this.apikey,
          limit: 100
        }
      }
    );
  }

}
