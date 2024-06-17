import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }

  register(email: string, password: string, confirmPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { email, password, confirmPassword });
  }

  logout() {
    // Clear any stored tokens or user information
    this.router.navigate(['/login']);
  }
}
