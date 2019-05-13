import { Component, OnInit } from '@angular/core';
import { TravellerService } from 'src/app/services/traveller.service';
import { Traveller } from 'src/app/models/traveller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-travelers',
  templateUrl: './admin-travelers.component.html',
  styleUrls: ['./admin-travelers.component.css']
})
export class AdminTravelersComponent implements OnInit {

  travellers: Traveller[];

  constructor(
    private travellerService: TravellerService, 
    public router: Router) {
      this.travellerService.getNewTraveller()
      .subscribe(traveller => {
        console.log(traveller);
        this.travellers.push(traveller);
      })
    }

  async ngOnInit() {
    this.travellers = await this.travellerService.fetchTravellers().toPromise();
  }

}
