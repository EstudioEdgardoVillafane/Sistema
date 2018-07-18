import { Component, OnInit } from '@angular/core';
import {Asgination} from '../../../model/asgination';
import { UserService } from '../../../services/back-end/user.service';
import { AsignationService } from '../../../services/back-end/asignation.service';

@Component({
  selector: 'app-asignacion-store',
  templateUrl: './asignacion-store.component.html',
  styleUrls: ['./asignacion-store.component.css']
})
export class AsignacionStoreComponent implements OnInit {

  objectAsignation = new Asgination();
  userList: any[];
  asignationList: any[];

  constructor(private userService: UserService,
              private asignationService: AsignationService ) { }

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

      this.asignationService.getAsignation()
      .snapshotChanges()
      .subscribe(item => {
        this.asignationList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.asignationList.push(x);
        });
      })

  }

  handleCreateAsignation() {
    this.asignationService.insertasignation(this.objectAsignation);
  }
}
