import { Component, Input } from '@angular/core';
import { User } from '../user-home.component';

@Component({
  selector: 'app-fellow-users',
  templateUrl: './fellow-users.component.html',
  styleUrls: ['./fellow-users.component.css']
})
export class FellowUsersComponent {

  @Input('users') userProps: User[] | undefined = {} as User[];

}
