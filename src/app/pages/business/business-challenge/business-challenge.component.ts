import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business-challenge',
  templateUrl: './business-challenge.component.html',
  styleUrls: ['./business-challenge.component.css']
})
export class BusinessChallengeComponent implements OnInit {

  challenges;

  constructor(private businessChallenge: BusinessService) {
    this.businessChallenge.getNewChallenge().subscribe( ()=>{
      this.loadChallenges();
    });
   }

  ngOnInit() {
    this.loadChallenges();
  }

  async loadChallenges(){
    this.challenges = await this.businessChallenge.getChallenges().toPromise();
  }
}
