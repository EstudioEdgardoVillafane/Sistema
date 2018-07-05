import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/back-end/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private route : ActivatedRoute, private router : Router) { }
  
  objectUser = new User();
  userList : any[];

  ngOnInit() {
    if(JSON.parse(localStorage.getItem("user-eev")) != null){
      this.router.navigateByUrl("/backend/home");
    }
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
  }
  saveUser(element){
    localStorage.setItem("user-eev",JSON.stringify(element));
    this.router.navigateByUrl("/backend/home");
  }
  handleSendData(){
    console.log(this.objectUser);
    this.userList.forEach(element => {
      (element.user == this.objectUser.user && element.password == this.objectUser.password) ? this.saveUser(element) : "nothing";
    });
  }

}
