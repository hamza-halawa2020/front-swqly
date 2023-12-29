import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JoinAsComponent } from './components/join-as/join-as.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterPartenerComponent } from './components/register-partener/register-partener.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomePageModule } from './home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoinAsComponent,
    RegisterClientComponent,
    RegisterPartenerComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    HomePageModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
