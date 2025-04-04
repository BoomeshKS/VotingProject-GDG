import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // ✅ Import RouterModule to enable <router-outlet>
  template: `<router-outlet></router-outlet>` // This allows navigation
})
export class AppComponent {}
