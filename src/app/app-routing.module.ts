import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { SaloonpageComponent } from './saloonpage/saloonpage.component';
import { TreatmemntComponent } from './treatmemnt/treatmemnt.component';
import { BooknowComponent } from './booknow/booknow.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'nooknow', component: TreatmemntComponent },
  { path: 'saloonpage', component: SaloonpageComponent },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'booknow', component: BooknowComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
