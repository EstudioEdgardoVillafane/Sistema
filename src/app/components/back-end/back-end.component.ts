import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.css']
})
export class BackEndComponent implements OnInit {



  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {

  }

  handleExitSession(){
    localStorage.removeItem('user-eev');
    this.router.navigateByUrl("/login");
  }

  goUsuarios(){
    this.router.navigate(['usuarios'], {relativeTo: this.route});
  }
  goHome(){
    this.router.navigate(['home'], {relativeTo: this.route});
  }
  goProyect(){
    this.router.navigate(['proyecto'], {relativeTo: this.route});
  }
}
