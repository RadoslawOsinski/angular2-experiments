import {Component}     from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Service}    from './Service';

// import {CrisisListComponent}   from './crisis-list.component';
// import {CrisisDetailComponent} from './crisis-detail.component';
// import {CrisisService}         from './crisis.service';

@Component({
    templateUrl: 'app/AForm.component.html'
    // ,
    // directives: [RouterOutlet],
    // providers:  [CrisisService]
})
export class AComponent {
    submitted = false;

    model = new Service();

    onSubmit() {
        this.submitted = true;
    }

    active = true;

    newService() {
        this.model = new Service();
        this.model.id = 1;
        this.model.name = 'abc';
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

}
