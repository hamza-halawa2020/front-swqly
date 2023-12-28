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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoinAsComponent,
    RegisterClientComponent,
    RegisterPartenerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
