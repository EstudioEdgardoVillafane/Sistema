import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

// Componentes
import { BackEndComponent } from '../components/back-end/back-end.component';
import { UserComponent } from '../components/back-end/user/user.component';
import { HomeComponent } from '../components/back-end/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'backend', pathMatch: 'full' },
  { path: 'backend',
  component: BackEndComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent}    
    { path: 'usuarios', component: UserComponent}
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})

export class AppRoutingModule {}
