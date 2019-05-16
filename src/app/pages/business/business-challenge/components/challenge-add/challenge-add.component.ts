import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-challenge-add',
  templateUrl: './challenge-add.component.html',
  styleUrls: ['./challenge-add.component.css']
})
export class ChallengeAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
