import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { TaskComponent } from './task/task.component';
import {FormsModule} from '@angular/forms';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { FulltaskComponent } from './fulltask/fulltask.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceExpComponent } from './service-exp/service-exp.component';
import { ServiceExp1Component } from './service-exp1/service-exp1.component'; //Model driven forms
import {HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetComponent } from './productdet/productdet.component';
import { AngularCodilityComponent } from './angular-codility/angular-codility.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductComponent,
    TaskComponent,
    ItemlistComponent,
    FulltaskComponent,
    FormsComponent,
    ServiceExpComponent,
    ServiceExp1Component,
    ErrorComponent,
    HomeComponent,
    ProductDetComponent,
    AngularCodilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Import form module
    ReactiveFormsModule, //import for Model driven forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
