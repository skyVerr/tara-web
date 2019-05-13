import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TravellerService } from 'src/app/services/traveller.service';
import { Traveller } from 'src/app/models/traveller';

@Component({
  selector: 'app-traveler-add',
  templateUrl: './traveler-add.component.html',
  styleUrls: ['./traveler-add.component.css']
})
export class TravelerAddComponent implements OnInit {

  formLoading: boolean;

  constructor(
    public router: Router, 
    private route: ActivatedRoute,
    private auth: AuthService,
    private travellerService: TravellerService
    ) { }

  ngOnInit() {
    this.formLoading = false;
  }

  cancel(){
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  async submit(f: NgForm){
    try {
      let traveller: Traveller = f.value;
      this.formLoading = true;
      let result = await this.auth.travelerSignup(f.value).toPromise();
      traveller.id = result['id'];
      console.log(result);
      delete traveller.password;
      this.travellerService.newTraveller(traveller);
      this.cancel();
    } catch (error) {
      
    } finally {
      this.formLoading = false;
    }
  }
}
