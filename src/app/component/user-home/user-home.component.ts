import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

export interface User {
  name: string
  email: string,
  photoUrl: string | null,
  id?: number
  isActive?: boolean
}

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  constructor(
    private http: HttpService
  ) {}

  fellowUsers: {name: string; email: string}[] = [];
  user: User = {} as User;

  ngOnInit(): void {
    this.http.getFellowUsers().subscribe(users => {
      users.forEach((user)=> {
        this.fellowUsers.push(user);
      })
    }, error => {
      if ( Array.isArray(error.error.message)) {
        alert(error.error.message[0])
      }
      else {
        alert(error.error.message);
      }
    })

    this.http.getCurrentUser().subscribe((user)=> {
        this.user = {name: user.name, email: user.email, photoUrl: user.photoUrl}
    })
    }

}
