import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-proyect',
  templateUrl: './view-proyect.component.html',
  styleUrls: ['./view-proyect.component.css']
})
export class ViewProyectComponent implements OnInit {
  
  nameProyect:string;

  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.nameProyect = this._activatedRoute.snapshot.paramMap.get('name');
  }

}
