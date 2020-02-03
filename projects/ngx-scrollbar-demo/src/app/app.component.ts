import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: '<app-example-lambda></app-example-lambda>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showGoToTopButton = false;
  largeScreen: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.largeScreen = breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(map((state: BreakpointState) => !state.matches));
  }

}
