import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../user-home/user-home.component';
import { HttpService } from 'src/app/service/http.service';
import { Store } from '@ngrx/store';
import { ChangeActiveStatus } from 'src/app/store/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private http: HttpService,
    private store: Store<{users: {users: User[]}}>
  ) {}
  @Input('users') userProps: User = {} as User;
  @Input('query') queryProps: string = '';

  src = 'https://th.bing.com/th?id=OIP.4HFNPpAomjyQFfNm6XLZkAHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2';


  ngOnInit(): void {
    setTimeout(() =>{
      if (this.userProps.photoUrl) {
        this.src = `http://localhost:3000/${this.userProps.photoUrl}`
      }
    }, 200)
  }

  changeActiveStatus(id: number | undefined) {
    if (id) {
      this.http.changeActiveStatus(id).subscribe(user=> {
        this.store.dispatch(new ChangeActiveStatus(id))
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
