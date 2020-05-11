import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { Login } from './login'


const routes: Routes = [
  { path: 'appComponent', component: AppComponent },
  { path: 'login', component: Login }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
