import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignModule } from './sign/sign.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomePageModule } from './home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';
import { LocationSearchComponent } from './shared/components/location-search/location-search.component';
import { SignupModule } from './signup/signup.module';
import { CounterService } from './shared/sharedService/counter.service';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LocationSearchComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SignModule,
    SignupModule,
    FontAwesomeModule,
    SharedModule,
    HomePageModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
  ],
  providers: [CounterService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
