import { Component, OnInit, AfterViewInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent implements OnInit, AfterViewInit {
  userId = '';
  password = '';
  isLoggedIn = false;
  showNotification = false;
  showWelcome = false;
  showDashboard = false;

  isLoading = true;
  isHeroVisible = true;
  isAtTop = true;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    window.addEventListener('scroll', () => {
      this.isAtTop = window.scrollY < 50;
      this.isHeroVisible = window.scrollY < window.innerHeight;
    });



    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      this.isLoggedIn = true;
      this.showDashboard = true;
      setTimeout(() => this.initializeAnimations(), 100);
    }
  }

  ngAfterViewInit() {
    if (this.showDashboard) {
      this.initializeAnimations();
    }
  }

  initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.admStatCard, .admSection').forEach(el => {
      observer.observe(el);
    });
  }

  handleLogin(event: Event) {
    event.preventDefault();
    
    if (this.userId === 'admin' && this.password === 'admin') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      
      this.showNotification = true;
      setTimeout(() => this.showNotification = false, 3000);

      this.showWelcome = true;
      setTimeout(() => {
        this.showWelcome = false;
        this.showDashboard = true;
        setTimeout(() => this.initializeAnimations(), 100);
      }, 2000);
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.showDashboard = false;
    localStorage.removeItem('isLoggedIn');
  }
}
