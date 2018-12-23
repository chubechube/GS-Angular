import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: [ './login.css' ]
  })

export class LoginComponent {
    returnUrl: string;


  constructor(private route: ActivatedRoute,
    private router: Router,
    ) {}
 
     username : string
     password : string
     
     ngOnInit() {

        
    }

  login() : void {
      console.log("Login Function")

  }
    
}