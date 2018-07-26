import { Injectable } from '@angular/core';

// FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../model/user';
import { Position } from '../../model/position';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  listPosition: AngularFireList<any>;
  listUser : AngularFireList<User>;

  constructor( private fireBase: AngularFireDatabase ) { }

  getPosition() {
    return this.listPosition = this.fireBase.list('position');
  }

  getUser() {
    let listReturn = [];
    this.listUser = this.fireBase.list('user');
    this.listUser
    .snapshotChanges()
    .subscribe(item=>{
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        listReturn.push(x as User);
      });
    });
    return listReturn;
  }


  insertUser(userObject: User) {
    this.listUser.push ({
      user: userObject.user,
      position: userObject.position,
      password: userObject.password
    });
  }

  updateUser(userObject : User) {
    this.listUser.update(userObject.$key, {
      user: userObject.user,
      password: userObject.password,
      position : userObject.position
    });
  }

  deleteUser($key) {
    this.listUser.remove($key);
  }
}
