import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ianimals } from '../interfaces/ianimals';
import { Icomments } from '../interfaces/icomments';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll(specie: string) {
    return this.http.get<Ianimals[]>(this.apiUrl + '/' + specie);
  }

  getById(id: number, specie: string) {
    return this.http.get<Ianimals>(`${this.apiUrl}/${specie}/${id}`);
  }

  post(data: Partial<Ianimals>, specie: string) {
    return this.http.post<Ianimals>(`${this.apiUrl}/${specie}`, data);
  }

  put(data: Partial<Ianimals>, specie: string) {
    return this.http.put<Ianimals>(`${this.apiUrl}/${specie}/${data.id}`, data);
  }

  delete(id: number, specie: string) {
    return this.http.delete<Ianimals>(`${this.apiUrl}/${specie}/${id}`);
  }

  addComments(body:Icomments){
    return this.http.post(this.apiUrl + '/comments', body)
  }

  getComments(){
    return this.http.get<Icomments[]>(this.apiUrl + '/comments');
  }
}
