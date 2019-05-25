import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';
import { NgForm, FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-challenge-add',
  templateUrl: './challenge-add.component.html',
  styleUrls: ['./challenge-add.component.css']
})
export class ChallengeAddComponent implements OnInit {

  loading: boolean = false;
  @ViewChild('inputBadge') inputBadge: ElementRef; 
  badge;
  previewImage: any = 'https://semantic-ui.com/images/wireframe/image.png';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private businessService: BusinessService,
    private sanitize: DomSanitizer
  ) { }

  ngOnInit() {
  }

  async submitChallenge(f: NgForm){
    try {
      this.loading = true;
      console.log(f.value);
      let form = new FormData();
      Object.keys(o => {
        form.append(o, f.value[o]);
      });
      form.append('image', this.badge, this.badge.name);
      console.log(this.badge);
      return;
      await this.businessService.addChallenge(form).toPromise();
      this.businessService.newChallenge(null);
      this.loading = false;
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }

  fileChangeEvent(e){
    this.badge = this.inputBadge.nativeElement.files[0];
    // this.previewImage = URL.createObjectURL(this.badge);
    // console.log(URL.createObjectURL(this.badge));
    this.previewImage = this.sanitize.bypassSecurityTrustUrl(URL.createObjectURL(this.badge));
    // console.log(this.previewImage);
  }

  cancel(){
    this.router.navigate(['../'], { relativeTo: this.route});
  }
}
