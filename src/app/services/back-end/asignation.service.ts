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

  insertasignation(Objectasignation: Asgination) {
    this.listAsignation.push ({
      name: Objectasignation.name,
      desciption: Objectasignation.description,
      hours: Objectasignation.hours,
      // assignor: Objectasignation.assignor,
      // responsable: Objectasignation.responsable,
      date: Objectasignation.date
    });
  }

  getAsignation() {
    return this.listAsignation = this.fireBase.list('asignacion');
  }
}
