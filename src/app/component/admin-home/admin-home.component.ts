import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { User } from '../user-home/user-home.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private http: HttpService,
    private store: Store<{users: {users: User[]}}>
  ) {}

  searchQuery: string = '';

  users: User[] = [] as User[]

  ngOnInit(): void {
     this.store.select('users').subscribe(users=> {
      this.users = users.users;
     })

  }

  searchUser(value: string) {
    this.searchQuery = value;
  if (value.length > 0) {
    this.users =  this.users.filter((user)=> {
      return user.name.startsWith(value);
    })
  } else {
    this.ngOnInit();
  }


  }


}
