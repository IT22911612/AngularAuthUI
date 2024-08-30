import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:7171/api/User/";

  constructor(private http: HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj); // Use backticks for string interpolation
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj); // Use backticks for string interpolation
  }

  storeToken(tokenValue: string)
  {
    localStorage.setItem('token', tokenValue)
  }

  getToken()
  {
    localStorage.getItem('token')
  }

  isLoggedIn(): boolean
  {
    return !!localStorage.getItem('token')
  }
}
