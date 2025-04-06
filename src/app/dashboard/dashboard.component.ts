import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  styleUrl: './dashboard.component.css',
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Loading Screen -->
    <div class="loading-screen" *ngIf="isLoading">
      <div class="loading-content">
        <div class="corner-lines top-left"></div>
        <div class="corner-lines top-right"></div>
        <div class="corner-lines bottom-left"></div>
        <div class="corner-lines bottom-right"></div>
        <div class="loading-symbol">⚡</div>
        <h1 class="loading-text">TrustVoteX</h1>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar" [class.solid]="!isHeroVisible || !isAtTop">
      <div class="nav-content">
        <a href="#" class="nav-logo">TrustVoteX</a>
        <div class="menu-toggle" (click)="toggleMenu()">☰</div>
        <div class="nav-links" [class.active]="isMenuOpen">
          <a href="/dashboard" class="nav-link"><i class="fas fa-chart-line"></i> Dashboard</a>
          <a href="/votingpage" class="nav-link"><i class="fas fa-vote-yea"></i> Voting Page</a>
          <a href="/resultpage" class="nav-link"><i class="fas fa-poll"></i> Results Page</a>
          <a href="/adminpage" class="nav-link"><i class="fas fa-user-shield"></i> Admin Panel</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="das-hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span *ngFor="let char of titleLetters" class="char">{{char}}</span>
        </h1>
        <button class="hero-button" (click)="scrollToNext()">Explore More</button>
      </div>
    </section>

    <!-- Additional Sections -->
    <section class="das-1-container" id="section1">
      <div class="das-1-content">
        <div class="das-1-text">
          <h2 class="das-1-title">AI-Powered Voting System</h2>
          <p class="das-1-subtitle">Experience a fast, secure, and reliable voting process enhanced by advanced AI verifications.</p>
        </div>
        <div class="das-1-image">
        </div>
      </div>
    </section>

    <section class="das-2-container" id="section2">
      <div class="das-2-content-box">
        <h2>Secure & Transparent</h2>
        <p>Our voting system leverages blockchain technology to ensure:</p>
        <ul>
          <li>Immutable vote records</li>
          <li>Transparent audit trails</li>
          <li>Cryptographic security</li>
          <li>Decentralized verification</li>
          <li>Tamper-proof results</li>
        </ul>
      </div>
      <div class="das-2-image">
      </div>
    </section>

    <section class="das-3" id="section3" #votingSection>
      <video autoplay muted loop class="das-3-video">
        <source src="../../assets/sec-vid.mp4" type="video/mp4">
      </video>
      <div class="das-3-content">
        <h2 class="das-3-title">Real-time Voting Results</h2>
        <div class="das-3-stats">
          <span class="das-3-percentage">{{ currentPercentage }}%</span>
          <p class="das-3-subtitle">Voting Economy Impact</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="das-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About TrustVoteX</h3>
          <p>Secure, transparent, and efficient voting solutions for the modern world. Built with trust and integrity at its core.</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#"><i class="fas fa-chevron-right"></i> How It Works</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> Security Features</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> Our Technology</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> Support</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul class="footer-links">
            <li><a href="#"><i class="fas fa-envelope"></i> support&#64;trustvotex.com</a></li>
            <li><a href="#"><i class="fas fa-phone"></i> +91 73052 35736</a></li>
            <li><a href="#"><i class="fas fa-map-marker-alt"></i> Tamil nadu, India</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-discord"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 TrustVoteX. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  isLoading = true;
  isMenuOpen = false;
  isHeroVisible = true;
  isAtTop = true;
  titleLetters = 'TrustVoteX'.split('');
  currentPercentage: number = 0;
  targetPercentage: number = 78;
  private hasAnimated = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    window.addEventListener('scroll', () => {
      this.isAtTop = window.scrollY < 50;
      this.isHeroVisible = window.scrollY < window.innerHeight;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animateCharacters();
    }, 2000);
  }

  animateCharacters() {
    const spans = document.querySelectorAll('.hero-title span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, index * 100);
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToNext() {
    const section1 = document.getElementById('section1');
    if (section1) {
      section1.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const section2 = document.querySelector('.das-2-container') as HTMLElement;
    const votingSection = document.querySelector('.das-3') as HTMLElement;
    
    if (section2) {
      const rect = section2.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        section2.classList.add('scrolled');
      } else {
        section2.classList.remove('scrolled');
      }
    }

    if (votingSection && !this.hasAnimated) {
      const rect = votingSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        this.startCounter();
        this.hasAnimated = true;
      }
    }
  }

  startCounter(): void {
    const increment = this.targetPercentage / 100;
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      this.currentPercentage = Math.min(Math.round(current), this.targetPercentage);
      
      if (this.currentPercentage >= this.targetPercentage) {
        clearInterval(counter);
      }
    }, 20);
  }
}

bootstrapApplication(DashboardComponent);