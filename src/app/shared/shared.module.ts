import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
