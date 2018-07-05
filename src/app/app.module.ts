//  Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  matFormFieldAnimations,
} from '@angular/material';

// FireBase Configuration

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

//  Componenets

import { AppComponent } from './app.component';
import { UserComponent } from './components/back-end/user/user.component';
//  Services

import { FrontEndComponent } from './components/front-end/front-end.component';
import { BackEndComponent } from './components/back-end/back-end.component';
import { UserService } from './services/back-end/user.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StoreComponent } from './components/back-end/user/store/store.component';
import { UpdateComponent } from './components/back-end/user/update/update.component';
import { HomeComponent } from './components/back-end/home/home.component';
import { ProyectComponent } from './components/back-end/proyect/proyect.component';
import { StoreProyectComponent } from './components/back-end/proyect/store-proyect/store-proyect.component';
import { ProyectService } from './services/back-end/proyect.service';
import { ViewProyectComponent } from './components/back-end/proyect/view-proyect/view-proyect.component';
import { LoginComponent } from './components/back-end/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    BackEndComponent,
    StoreComponent,
    UpdateComponent,
    UserComponent,
    HomeComponent,
    ProyectComponent,
    StoreProyectComponent,
    ViewProyectComponent,
    LoginComponent,    
  ],
  imports: [
  AppRoutingModule,
  BrowserModule,
  FormsModule,
  AngularFireDatabaseModule,
  AngularFireModule.initializeApp(environment.firebase),
  BrowserAnimationsModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
  ],
  providers: [
    ProyectService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
