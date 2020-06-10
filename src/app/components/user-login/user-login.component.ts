import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
  export class UserLoginComponent implements OnInit {

  email = "";
  password = "";
  allUsers = [];
  loginError = false;
  
  constructor(private data: DataService, private router : Router, private shared: SharedService) { 
    // get all users
    this.allUsers = data.userList
    ;
  }

  ngOnInit(): void {
  }

   login() {
  //travel the user
    //compare each user credentials with values from the form 
    var found = false;

    for(let i = 0; i < this.allUsers.length; i++){
      var user = this.allUsers[i];
      if(user.email.toLowerCase() == this.email.toLowerCase() && user.password == this.password){
        console.log( "Login successful");
        alert("logged in correctly")
        found = true;
        this.loginError = false;

        this.shared.isUserLoggedIn = true;
        this.shared.email = user.email;

      // send the user to register page
        this.router.navigate(['/user/register'])
      }
    }
    if(!found)
      console.error("Wrong credentials!!");
      this.loginError = true;
    }
  }



