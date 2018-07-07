import { Injectable } from '@angular/core';

// FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Class
import { Proyect } from '../../model/proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  listProyect: AngularFireList<any>;

  constructor(private fireBase: AngularFireDatabase) { }

  getProyect() {
    return this.listProyect = this.fireBase.list('proyect');
  }

  insertProyect(proyectObject: Proyect) {
    this.listProyect.push ({
      name : proyectObject.name,
      description : proyectObject.description,
      url: proyectObject.url,
      responsable : proyectObject.responsable
    });
  }

  updateUser(proyectObject) {
    this.listProyect.update(proyectObject.$key, {
      name : proyectObject.name,
      description : proyectObject.description,
      url: proyectObject.url,
      responsable : proyectObject.responsable
    });
  }

  deleteUser($key) {
    this.listProyect.remove($key);
  }
}
