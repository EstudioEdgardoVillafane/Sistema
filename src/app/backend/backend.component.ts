import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Example } from '../example';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(private userService : UsersService) { }
  exampleObject = new Example();
  
  userList : any[];

  ngOnInit() {
      this.userService.getUser()
      .snapshotChanges()
      .subscribe(item => {
        this.userList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.userList.push(x);
        });
      })
      console.log(this.userList);
  }

  handdleClick(){
    console.log(this.exampleObject);
    this.userService.insertUser(this.exampleObject);
  }

}
