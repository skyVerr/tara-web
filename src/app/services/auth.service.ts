import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl+'auth';

  constructor(private http: HttpClient) { }

  public login(credentials){
    return this.http.post(this.url+'/login',credentials);
  }
  
}
