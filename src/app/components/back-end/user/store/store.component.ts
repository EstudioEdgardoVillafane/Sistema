import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/back-end/user.service';
import { User } from '../../../../model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  objectUser = new User();
  userList: any[];
  position: any[];
  constructor(private userService: UserService, private router : Router,private route : ActivatedRoute,  private location: Location) { }

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
      this.userService.getPosition()
      .snapshotChanges()
      .subscribe(item => {
        let aux = 1;
        this.position = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
           x["$key"] = element.key;
          this.position.push(x);

        });
      })
  }
  passwordValue
  passwordConfirmValue
  handleSendUser(){
     
      this.userService.insertUser(this.objectUser);
      this.location.back();
    
  }
  handleReturnTable(){
    this.router.navigate(['usuarios'], {relativeTo: this.route});
  }

}
