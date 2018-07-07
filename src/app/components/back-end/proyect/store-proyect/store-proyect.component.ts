import { Component, OnInit } from '@angular/core';
import { Proyect } from '../../../../model/proyect';
import { ProyectService } from '../../../../services/back-end/proyect.service';

@Component({
  selector: 'app-store-proyect',
  templateUrl: './store-proyect.component.html',
  styleUrls: ['./store-proyect.component.css']
})
export class StoreProyectComponent implements OnInit {

  objectProyect = new Proyect();
  proyectList: any[];
  
  constructor(private proyectService : ProyectService) { }

  ngOnInit() {
    this.proyectService.getProyect()
    .snapshotChanges()
    .subscribe(item => {
      this.proyectList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.proyectList.push(x);
      });
    })
  }
  handleSendProyect(){
    this.proyectService.insertProyect(this.objectProyect);
  }
}
