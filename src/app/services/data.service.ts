import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  userList: User[] = [];


  constructor() { }

  saveUser(user){
    this.userList.push(user);
  }

}
