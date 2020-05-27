import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterAnnouncementComponent } from './register-announcement/register-announcement.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListingAnnouncementComponent } from './listing-announcement/listing-announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAnnouncementComponent,
    RegisterUserComponent,
    ListingAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
