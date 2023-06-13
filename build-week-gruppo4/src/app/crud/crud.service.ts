import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ianimals } from '../interfaces/ianimals';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Ianimals[]>(this.apiUrl + '/' + 'cane');
  }

  getById(id: number) {
    return this.http.get<Ianimals>(`${this.apiUrl}/${'cane'}/${id}`);
  }

  post(data: Partial<Ianimals>) {
    return this.http.post<Ianimals>(`${this.apiUrl}/${'cane'}`, data);
  }

  put(data: Partial<Ianimals>) {
    return this.http.put<Ianimals>(`${this.apiUrl}/${'cane'}/${data.id}`, data);
  }

  delete(id: number) {
    return this.http.delete<Ianimals>(`${this.apiUrl}/${'cane'}/${id}`);
  }
}
