import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = false;
  private userSub: Subscription;
  title = 'testpro';
  serverElements = [
    // 'one',
    // 'two',
    'three',
    'type'
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  
  onRootEvent(event) {
    console.log('[[ rootEvent ]]', event);
  }

  onLogout() {
    this.authService.logout();
  }
}
