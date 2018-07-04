import { Injectable } from '@angular/core';

//FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  listUser : AngularFireList<any>;

  constructor( private fireBase : AngularFireDatabase ) { }

  getUser(){
    return this.listUser = this.fireBase.list('sistema')
  }
  
  // insertUser(userObject : Example){    
  //   this.listUser.push ({
  //     name: userObject.name,
  //     password: userObject.password
  //   });
  // }

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
