import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule ,  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Services and Providers
//import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt-interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor'

//App Modules
import { LoginComponent } from './Components/Login/login';
import { WelcomeComponent } from './Components/Welcome/welcome';

//Material Modules
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatInputModule,
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
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  entryComponents: [WelcomeComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
 

    // provider used to create fake backend
    //fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
