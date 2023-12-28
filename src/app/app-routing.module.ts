import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JoinAsComponent } from './components/join-as/join-as.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterPartenerComponent } from './components/register-partener/register-partener.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register-client',
    component: RegisterClientComponent,
  },
  {
    path: 'register-partener',
    component: RegisterPartenerComponent,
  },
  {
    path: 'joinas',
    component: JoinAsComponent,
  },
  // {
  //   path: 'test',
  //   component: SlideComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
