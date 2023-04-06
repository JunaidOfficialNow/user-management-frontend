import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { User } from '../user-home/user-home.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private http: HttpService,
  ) {}

  searchQuery: string = '';

  users: User[] = [] as User[]

  ngOnInit(): void {
    this.http.getAdminUsers().subscribe(users => {
      users.forEach(user=> {
        this.users.push(user);
      })
    }, error=> {
      if ( Array.isArray(error.error.message)) {
        alert(error.error.message[0]);
      }
      else {
        alert(error.error.message);
      }

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
