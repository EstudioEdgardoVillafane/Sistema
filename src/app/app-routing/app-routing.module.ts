import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

// Componentes
import { BackEndComponent } from '../components/back-end/back-end.component';
import { UserComponent } from '../components/back-end/user/user.component';
import { HomeComponent } from '../components/back-end/home/home.component';
import { StoreComponent } from '../components/back-end/user/store/store.component';
import { UpdateComponent } from '../components/back-end/user/update/update.component';
import { ProyectComponent } from '../components/back-end/proyect/proyect.component';
import { StoreProyectComponent } from '../components/back-end/proyect/store-proyect/store-proyect.component';
import { ViewProyectComponent } from '../components/back-end/proyect/view-proyect/view-proyect.component';
import { LoginComponent } from '../components/back-end/login/login.component';
import { AsignacionStoreComponent } from '../components/back-end/asignacion-store/asignacion-store.component';

const routes: Routes = [
  { path: '', redirectTo: 'backend', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'backend',
  component: BackEndComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full'},

    { path: 'home', component: HomeComponent},
    { path: 'usuarios', component: UserComponent},
    { path: 'usuarios/agregar', component: StoreComponent},
    { path: 'usuarios/editar' , component: UpdateComponent},
    { path: 'proyecto', component: ProyectComponent},
    { path: 'proyecto/store', component: StoreProyectComponent},
    { path: 'proyecto/view/:name', component: ViewProyectComponent},
    { path: 'agregarasignacion', component: AsignacionStoreComponent }
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
