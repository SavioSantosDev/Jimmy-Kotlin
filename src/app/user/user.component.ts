import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  inscricao: Subscription;
  currentRoute: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.currentRoute = this.router.url;

    this.inscricao = this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.currentRoute = this.router.url;
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
    });
  }

  // ngOnDestroy() {
  //   this.inscricao.unsubscribe;
  // }

}
