import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fellow-users',
  templateUrl: './fellow-users.component.html',
  styleUrls: ['./fellow-users.component.css']
})
export class FellowUsersComponent {

  @Input('users') userProps: {name: string , email: string}[] = [];

}
