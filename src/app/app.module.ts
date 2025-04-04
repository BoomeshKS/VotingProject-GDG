import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, RouterModule],
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: '/login', component: LoginComponent },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
