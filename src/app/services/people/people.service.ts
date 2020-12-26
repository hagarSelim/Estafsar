import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  BASE_URL = environment.BASE_URL;
  loading:Boolean = false;
  constructor(private httpClient: HttpClient) { }

  _getAllPeople()
  {
    return this.httpClient.get(`${this.BASE_URL}/people`);
  }
  _searchPeople(word:string)
  {
    return this.httpClient.get(`${this.BASE_URL}/people/?search=${word}`)
  }

  _getPeopleByPage(page:number)
  {
    return this.httpClient.get(`${this.BASE_URL}/people/?page=${page}`)
  }
}
