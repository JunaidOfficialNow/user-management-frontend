import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../user-home/user-home.component';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(
    private http: HttpService,
  ) {}
  @Input('users') userProps: User = {} as User;
  @Input('query') queryProps: string = '';


  changeActiveStatus(id: number | undefined) {
    if (id) {
      this.http.changeActiveStatus(id).subscribe(user=> {
        this.userProps.isActive = !this.userProps.isActive;
      }, error =>  {
        if ( Array.isArray(error.error.message)) {
          alert(error.error.message[0]);
        }
        else {
          alert(error.error.message);
        }
      })

    }
  }

}
