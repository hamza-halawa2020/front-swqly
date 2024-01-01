import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SpinnerComponent, 
    NotFoundComponent, 
  ],
  imports: [
    CommonModule, 
    RouterLink,
    FontAwesomeModule
  ],
})
export class SharedModule {}
