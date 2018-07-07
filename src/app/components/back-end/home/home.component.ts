import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objectUser = new User();

  constructor() { }

  ngOnInit() {
    this.objectUser = JSON.parse(localStorage.getItem("user-eev"));
  }

}
