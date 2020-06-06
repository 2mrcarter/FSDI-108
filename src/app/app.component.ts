import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';
  myName ='Joel Carter';

  constructor(){
    console.log("Welcome everyone");

    let name = "Joel Carter";
    let found = false;
    let list = [];
   
  }
    hello(name){
      console.log(name);
    }
    something(){
      console.log("Btn clicked");
      this.title = "Wow, did you see that?!";
    }
}

