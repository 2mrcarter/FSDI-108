import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  userList: User[] = [];


  constructor() { 
  // create default user info
  var admin = new User();
  admin.firstName = "Admin";
  admin.lastName = "User";
  admin.userName = "Admin";
  admin.password = "qwerty";

  this.userList.push(admin);
  }

  saveUser(user){
    this.userList.push(user);
  }

}
