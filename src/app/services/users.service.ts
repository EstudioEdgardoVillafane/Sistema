import { Injectable } from '@angular/core';

//FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Example } from '../example';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  listUser : AngularFireList<any>;
  selectUser = new Example;
  
  constructor(private fireBase : AngularFireDatabase ) { }

  getUser(){
    return this.listUser = this.fireBase.list('caca')
  }
  insertUser(userObject : Example){    
    this.listUser.push ({
      name: userObject.name,
      password: userObject.password
    });
  }
  updateUser(userObject){
    this.listUser.update(userObject.$key,{
      name: "toto",
      password: "nada"
    });
  }
  deleteProduct($key){
    this.listUser.remove($key);
  }
}
