import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [SpinnerComponent, NotFoundComponent],
  imports: [CommonModule, RouterLink],
})
export class SharedModule {}
