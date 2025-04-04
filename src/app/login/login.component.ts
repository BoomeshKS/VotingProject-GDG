import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'log-login',
  styleUrls: ["./login.component.css"],
  template: `
    <div class="log-form">
      <h2 class="log-title">Login to TrustVoteX</h2>
      
      <div class="log-video-container">
        <video #videoElement class="log-video" autoplay playsinline></video>
      </div>

      <div class="log-input-group">
        <input type="email" class="log-input" placeholder="Email" [(ngModel)]="email">
      </div>

      <div class="log-input-group">
        <input type="password" class="log-input" placeholder="Password" [(ngModel)]="password">
      </div>

      <button class="log-button" (click)="login()">Sign In</button>
      
      <button class="log-button" style="margin-top: 0.8rem;" (click)="signInWithGoogle()">
        <img src="https://www.google.com/favicon.ico" alt="Google" class="google-icon">
        Continue with Google
      </button>

      <div class="log-switch">
        Don't have an account?<a (click)="toggleForm()">Sign Up</a>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule]
})
class LogLogin {
  email: string = '';
  password: string = '';

  constructor(private app: LoginComponent) {}

  login() {
    this.app.currentView = 'welcome';
  }

  signInWithGoogle() {
    // Implement Google sign in
  }

  toggleForm() {
    this.app.currentView = 'signup';
  }
}

@Component({
  selector: 'log-signup',
  styleUrls: ["./login.component.css"],
  template: `
    <div class="log-form">
      <h2 class="log-title">Create Account</h2>
      
      <div class="log-video-container">
        <video #videoElement class="log-video" autoplay playsinline></video>
      </div>
      
      <button class="log-button" style="margin-bottom: 1rem;" (click)="captureFace()">
        Capture Face
      </button>

      <div class="log-input-group">
        <input type="text" class="log-input" placeholder="Full Name" [(ngModel)]="name">
      </div>

      <div class="log-input-group">
        <input type="email" class="log-input" placeholder="Email" [(ngModel)]="email">
      </div>

      <div class="log-input-group">
        <input type="password" class="log-input" placeholder="Password" [(ngModel)]="password">
      </div>

      <button class="log-button" (click)="signup()">Sign Up</button>

      <div class="log-switch">
        Already have an account?<a (click)="toggleForm()">Sign In</a>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule]
})
class LogSignup {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private app: LoginComponent) {}

  captureFace() {
    // Implement face capture logic
  }

  signup() {
    this.app.currentView = 'login';
  }

  toggleForm() {
    this.app.currentView = 'login';
  }
}

@Component({
  selector: 'log-welcome',
  styleUrls: ["./login.component.css"],
  template: `
    <div class="log-welcome">
      <h1>Welcome to TrustVoteX</h1>
      <p>Your secure and trusted platform for digital democracy.</p>
      <button class="dashboard-button" (click)="goToDashboard()">Go to Dashboard</button>
    </div>
  `,
  standalone: true
})
class LogWelcome {
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

@Component({
  selector: 'app-root',
  styleUrls: ["./login.component.css"],
  template: `
    <div class="log-container">
      <div class="log-left-section">
        <img 
          src="../../assets/login-img.jpg" 
          alt="AI Voting System" 
          class="log-illustration"
        >
      </div>
      <log-login *ngIf="currentView === 'login'"></log-login>
      <log-signup *ngIf="currentView === 'signup'"></log-signup>
      <log-welcome *ngIf="currentView === 'welcome'"></log-welcome>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, LogLogin, LogSignup, LogWelcome]
})
export class LoginComponent {
  currentView: 'login' | 'signup' | 'welcome' = 'login';
}

bootstrapApplication(LoginComponent);