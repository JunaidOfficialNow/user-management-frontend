import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
export class UserHomeComponent implements OnInit, OnDestroy{

  constructor(
    private http: HttpService,
    private store: Store<{users: {users: User[]}}>

  ) {}
  users: User[] = [];
  user: User = {} as User;
  subscription: Subscription = {} as Subscription;

  ngOnInit(): void {
      this.subscription = this.store.select('users').subscribe(users=> {
        this.users = users.users;
      })
    this.http.getCurrentUser().subscribe((user)=> {
        this.user = {name: user.name, email: user.email, photoUrl: user.photoUrl}
    })
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
