import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent} from './login/components/login.component';
import { RegisterAnnouncementComponent } from './announcement/components/register-announcement/register-announcement.component';


const routes: Routes = [
  { path: 'appComponent', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerAnnouncement', component: RegisterAnnouncementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
