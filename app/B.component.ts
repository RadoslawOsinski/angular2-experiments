import {Component, OnInit}     from 'angular2/core';
import {BService}         from './BService';
import {Service} from './Service';

@Component({
    template: `
    <h2>B list</h2>
    <ul>
        <li *ngFor="#service of services">
            {{service.name}}
        </li>
    </ul>
  `,
    providers:  [BService]
})
export class BComponent implements OnInit {
    services: Service[];

    constructor(private _bService: BService) { }

    getServices() {
        this.services = this._bService.getList();
    }

    ngOnInit() {
        this.getServices();
    }

}
