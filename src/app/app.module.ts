import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/components/login.component';

import { RegisterUserComponent } from './register-user/components/tenant/register-user-tenant.component';
import { ListingAnnouncementComponent } from './announcement/components/listing-announcement/listing-announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
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
