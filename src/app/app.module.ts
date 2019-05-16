import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//Semantic ui
import { SuiModule } from 'ng2-semantic-ui';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminTravelersComponent } from './pages/admin/admin-travelers/admin-travelers.component';
import { TravelerAddComponent } from './pages/admin/admin-travelers/components/traveler-add/traveler-add.component';
import { BusinessChallengeComponent } from './pages/business/business-challenge/business-challenge.component';
import { ChallengeAddComponent } from './pages/business/business-challenge/components/challenge-add/challenge-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminTravelersComponent,
    TravelerAddComponent,
    BusinessChallengeComponent,
    ChallengeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
