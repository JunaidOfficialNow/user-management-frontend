import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';
import { Store } from '@ngrx/store';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpService,
    private store: Store<{users: {users: User[]}}>
  ) {}

  ngOnInit(): void {
    this.http.getAdminUsers().subscribe(users => {
      this.store.dispatch({type: 'GET_USERS', payload: users})
   }, error => {
     if ( Array.isArray(error.error.message)) {
       alert(error.error.message[0])
     }
     else {
       alert(error.error.message);
     }
   })
    
  }
  
}
