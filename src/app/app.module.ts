import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { SaloonsComponent } from './saloons/saloons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SaloonpageComponent } from './saloonpage/saloonpage.component';
import { TreatmemntComponent } from './treatmemnt/treatmemnt.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpageselectorComponent } from './spageselector/spageselector.component';

import { HpsectionComponent } from './hpsection/hpsection.component';
import { BooknowComponent } from './booknow/booknow.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SelecttreatmenComponent } from './selecttreatmen/selecttreatmen.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SaloonsComponent,
    SaloonpageComponent,
    TreatmemntComponent,
    NavbarComponent,
    SpageselectorComponent,
    HpsectionComponent,
    BooknowComponent,
    LoginComponent,
    SignupComponent,
    SelecttreatmenComponent,
    SectionComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
