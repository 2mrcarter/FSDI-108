import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  email = "";
  password = "";
  isErrorVisible = false;
  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {

 
  }

  login() {
    
  }


}
