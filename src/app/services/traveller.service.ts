import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Traveller } from '../models/traveller';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {

  private traveller = new Subject<any>();
  url = environment.apiUrl+'travellers';

  constructor(private http: HttpClient) { }

  public fetchTravellers(): Observable<Traveller[]>{
    return this.http.get<Traveller[]>(this.url+'/');
  }

  newTraveller(traveller) {
    this.traveller.next(traveller);
  }

  getNewTraveller () {
    return this.traveller.asObservable();
  }
}
