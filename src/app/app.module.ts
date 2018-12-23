import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//App Modules
import { LoginComponent } from './Components/Login/login';
import { WelcomeComponent } from './Components/Welcome/welcome';

//Material Modules

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    BrowserAnimationsModule
    

  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],



})
export class MaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
    
  ],
  entryComponents: [WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
