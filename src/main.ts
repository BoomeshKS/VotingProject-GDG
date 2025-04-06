import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { VotingpageComponent } from './app/votingpage/votingpage.component';
import { ResultpageComponent } from './app/resultpage/resultpage.component';
import { AdminpageComponent } from './app/adminpage/adminpage.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'votingpage', component: VotingpageComponent },
      { path: 'resultpage', component: ResultpageComponent },
      { path: 'adminpage', component: AdminpageComponent }
    ])
  ]
});
