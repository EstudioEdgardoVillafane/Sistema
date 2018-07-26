import {Component, OnInit, ViewChild} from '@angular/core';
import { UserService } from '../../../services/back-end/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { User } from '../../../model/user';
import {SelectionModel} from '@angular/cdk/collections';
import { Proyect } from '../../../model/proyect';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: any[];
  displayedColumns: string[] = ['key', 'user', 'position', 'hours'];
  filterUser = new MatTableDataSource(this.userList);
  dataSource = new MatTableDataSource<User>(this.userList);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  hola;
  
  constructor(private userService : UserService, private router : Router,private route : ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.userService.getUser())
    this.hola = this.userService.getUser();  // .snapshotChanges()
    console.log(this.hola);
    // .subscribe(item => {
    //   this.userList = [];
    //   item.forEach(element => {
    //     let x = element.payload.toJSON();
    //     x["$key"] = element.key;
    //     this.userList.push(x);
    //   });
    // })
    this.dataSource.paginator = this.paginator;

  }
  
  handleGoStoreForm(){
    this.router.navigate(['agregar'], {relativeTo: this.route});
  }
  hadleFilter(filterValue: string){
    this.filterUser.filter = filterValue.trim().toLowerCase();
  }
  handleDeleteUser($key: string){
    this.userService.deleteUser($key)
  }


  selection = new SelectionModel<User>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
