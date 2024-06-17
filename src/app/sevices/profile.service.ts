import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:4000/api/profiles';

  constructor(private http: HttpClient) { }

  saveProfile(profileData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, profileData);
  }
}
