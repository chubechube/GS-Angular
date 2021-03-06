import { Component, OnInit  } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../_model/user';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'welcome',
  templateUrl: './welcome.html',
  styleUrls: [ './welcome.css' ]
})
export class WelcomeComponent implements OnInit  {

  title = 'Benvenuto in G-Swim';
  users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getAll().subscribe((res : User[])=>{
      console.log(res);
      this.users = res;
  });
  }

 /* ngOnInitOld() {
      this.userService.getAll().pipe(first()).subscribe(users => { 
          this.users = users; 
      });
  }
   */ 

  ngOnInit() {
    //this.userService.getAll();
}
}
