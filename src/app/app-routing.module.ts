import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtmComponent } from './components/atm/atm.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'atm',
    component: AtmComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
