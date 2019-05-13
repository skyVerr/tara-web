import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminHomeComponent } from "./pages/admin/admin-home/admin-home.component";
import { AdminTravelersComponent } from './pages/admin/admin-travelers/admin-travelers.component';
import { TravelerAddComponent } from './pages/admin/admin-travelers/components/traveler-add/traveler-add.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/travelers', component: AdminTravelersComponent, children: [
    { path: 'add', component: TravelerAddComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
