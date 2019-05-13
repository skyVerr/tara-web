import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Traveller } from '../models/traveller';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl+'auth';

  constructor(private http: HttpClient) { }

  public login(credentials){
    return this.http.post(this.url+'/login',credentials);
  }

  public travelerSignup(traveller: Traveller){
    return this.http.post(this.url+'/signup/travellers', traveller);
  }
  
}
