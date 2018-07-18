import { Injectable } from '@angular/core';

// FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../model/user';
import { Position } from '../../model/position';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  listPosition: AngularFireList<any>;
  listUser: AngularFireList<any>;

  constructor( private fireBase: AngularFireDatabase ) { }

  getPosition() {
    return this.listPosition = this.fireBase.list('position');
  }

  getUser() {
    return this.listUser = this.fireBase.list('user');
  }


  insertUser(userObject: User) {
    this.listUser.push ({
      user: userObject.user,
      position: userObject.position,
      password: userObject.password
    });
  }

  updateUser(userObject) {
    this.listUser.update(userObject.$key, {
      user: userObject.user,
      password: userObject.password
    });
  }

  deleteUser($key) {
    this.listUser.remove($key);
  }
}
