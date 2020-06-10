import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model = new User();
  retypePassword = '';
  alertVisible = false;

  constructor( private data: DataService) { }
  
  

  ngOnInit(): void {
  console.log('user register ngOnInit');
  }

  isDataCorrect(){
    return this.model.userName && this.model.email && this.model.password && this.model.password == this.retypePassword;
  }

  save(){
    this.data.saveUser(this.model);

    //clear the form
    this.model = new User(); // reinitialize the obj on memory 
    this.retypePassword ='';

    this.alertVisible = true;
    setTimeout(() => this.alertVisible = false, 2000);
  }
}
