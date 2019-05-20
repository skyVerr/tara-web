import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-challenge-add',
  templateUrl: './challenge-add.component.html',
  styleUrls: ['./challenge-add.component.css']
})
export class ChallengeAddComponent implements OnInit {

  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private businessService: BusinessService
  ) { }

  ngOnInit() {
  }

  async submitChallenge(f: NgForm){
    try {
      this.loading = true;
      console.log(f.value);
      await this.businessService.addChallenge(f.value).toPromise();
      this.businessService.newChallenge(null);
      this.loading = false;
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }

  cancel(){
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
