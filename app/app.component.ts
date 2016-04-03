import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AComponent} from './A.component';
import {BComponent} from './B.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App 3 4</h1>
        <h1>Component Router</h1>
          <nav>
            <a [routerLink]="['ACenter']">a link</a>
            <a [routerLink]="['BDetails']">b link</a>
          </nav>
          <router-outlet></router-outlet>
  `,
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
})
@RouteConfig([
    {path: '/a', name: 'ACenter', component: AComponent},
    {path: '/b', name: 'BDetails', component: BComponent}
])
export class AppComponent {
}
