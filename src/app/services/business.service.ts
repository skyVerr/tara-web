import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  challenge = new Subject();

  apiUrl = environment.apiUrl+'business';
  constructor(private http: HttpClient) { }

  public addChallenge(challenge){
    return this.http.post(this.apiUrl+'/challenge', challenge);
  }

  public getChallenges(){
    return this.http.get(this.apiUrl+'/challenge');
  }

  newChallenge(challenge) {
    this.challenge.next(challenge);
  }

  getNewChallenge() {
    return this.challenge.asObservable();
  }
}
