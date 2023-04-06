import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'http://localhost:3000'

  getFellowUsers() {
    return this.http.get<{name: string, email: string}[]>(`${this.baseUrl}/api/v1/users`).pipe(map( response=>  {
      return response.map(user => {
        return {name: user.name, email: user.email}
      })
    }));
  }
  getCurrentUser() {
    return this.http.get<{name: string, email: string, photoUrl: string | null}>(`${this.baseUrl}/api/v1/users/current`);
  }

    addProfile(file: File): Observable<{success: string | boolean}> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{success: string | boolean}>(`${this.baseUrl}/api/v1/users/profile`, formData);
  }
}
