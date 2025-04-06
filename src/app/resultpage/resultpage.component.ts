import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultpage',
  imports: [CommonModule],
  templateUrl: './resultpage.component.html',
  styleUrl: './resultpage.component.css',

  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInStagger', [
      transition('* => in', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger('150ms', [
            animate('0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('contentAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.98)' }),
        animate('0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]


})
export class ResultpageComponent implements OnInit {
  activeSection = 'overview';
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
  }
}

bootstrapApplication(ResultpageComponent, {
  providers: [provideAnimationsAsync()]
});