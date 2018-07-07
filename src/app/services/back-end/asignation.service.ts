import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Asgination} from '../../model/asgination';

@Injectable({
  providedIn: 'root'
})
export class AsignationService {

  listPosition: AngularFireList<any>;
  listAsignation: AngularFireList<any>;

  constructor(private fireBase: AngularFireDatabase) { }

  insertasignation() {
    this.listAsignation.push ({
      name: Objectasignation.user,
      position: Objectasignation.position,
      password: Objectasignation.password
    });
  }

}
