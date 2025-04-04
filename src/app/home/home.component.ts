import { Component, OnInit, AfterViewInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  styleUrls: ['./home.component.css'],
  template: `
    <div class="Home">
      <section class="Home-hero">
        <div class="Home-container">
          <h1 class="Home-title">AI-Powered Voting System</h1>
          <h2 class="Home-subtitle">Revolutionizing Democracy with Intelligent Technology</h2>
          
          <div class="Home-scroll-indicator">
            <div class="Home-arrow"></div>
          </div>
        </div>
      </section>

      <section class="Home-sections">
        <div class="Home-container">
          <div class="Home-boxes">
            <div class="Home-box Home-box-left">
              <img 
                [src]="'assets/Secure-Vote.jpg'" 
                alt="Secure Voting" 
                class="Home-image"
              >
              <h3>Secure Voting Platform</h3>
              <p>State-of-the-art encryption and blockchain technology ensuring tamper-proof voting records.</p>
            </div>
            
            <div class="Home-box Home-box-right">
              <img 
                src="./assets/AI_Vote.jpg" 
                alt="AI Analytics" 
                class="Home-image"
              >
              <h3>AI-Powered Analytics</h3>
              <p>Real-time vote analysis and fraud detection powered by advanced artificial intelligence.</p>
            </div>
          </div>

          <a href="/login" class="Home-button">
            Get Started
          </a>

          <div class="Home-features">
            <div class="Home-feature" data-feature="1">
              <h3>Blockchain Security</h3>
              <p>Every vote is secured using advanced blockchain technology, ensuring complete transparency and immutability.</p>
            </div>

            <div class="Home-feature" data-feature="2">
              <h3>Real-Time Processing</h3>
              <p>Experience instant vote counting and result updates with our advanced processing system.</p>
            </div>

            <div class="Home-feature" data-feature="3">
              <h3>Smart Verification</h3>
              <p>Multi-factor authentication and AI-powered identity verification ensure only eligible voters participate.</p>
            </div>

            <div class="Home-feature" data-feature="4">
              <h3>Data Privacy</h3>
              <p>Advanced encryption ensures your vote remains confidential while maintaining system transparency.</p>
            </div>
          </div>

          <div class="Home-section">
            <h2>Decentralized Voting Infrastructure</h2>
            <p>Our system utilizes distributed ledger technology to ensure votes cannot be tampered with or manipulated.</p>
          </div>

          <div class="Home-section">
            <h2>AI-Powered Fraud Prevention</h2>
            <p>Machine learning algorithms continuously monitor for suspicious patterns and potential security threats.</p>
          </div>

          <div class="Home-section">
            <h2>Real-Time Results</h2>
            <p>Watch live as votes are counted and verified, with instant updates and comprehensive analytics.</p>
          </div>

          <div class="Home-section">
            <h2>Accessibility First</h2>
            <p>Designed to be inclusive and accessible to all voters, with support for multiple languages and assistive technologies.</p>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit() {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (entry.target.classList.contains('Home-boxes')) {
              const leftBox = entry.target.querySelector('.Home-box-left');
              const rightBox = entry.target.querySelector('.Home-box-right');
              
              if (leftBox) {
                setTimeout(() => leftBox.classList.add('visible'), 0);
              }
              if (rightBox) {
                setTimeout(() => rightBox.classList.add('visible'), 200);
              }
            }
            
            if (entry.target.classList.contains('Home-features')) {
              const features = entry.target.querySelectorAll('.Home-feature');
              features.forEach((feature, index) => {
                setTimeout(() => {
                  feature.classList.add('visible');
                }, index * 200);
              });
            }
          } else {
            // Remove visible class when out of view to trigger animation again
            entry.target.classList.remove('visible');
            
            if (entry.target.classList.contains('Home-boxes')) {
              const leftBox = entry.target.querySelector('.Home-box-left');
              const rightBox = entry.target.querySelector('.Home-box-right');
              if (leftBox) leftBox.classList.remove('visible');
              if (rightBox) rightBox.classList.remove('visible');
            }
            
            if (entry.target.classList.contains('Home-features')) {
              entry.target.querySelectorAll('.Home-feature')
                .forEach(feature => feature.classList.remove('visible'));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    document.querySelectorAll('.Home-section, .Home-boxes, .Home-features')
      .forEach(element => observer.observe(element));
  }
}

bootstrapApplication(HomeComponent);