import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  allUsers: User[] = [];
  
  constructor( private data: DataService) {
      this.allUsers = data.userList;
   }

  ngOnInit(): void {
  }

}
