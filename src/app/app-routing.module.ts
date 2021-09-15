import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FulltaskComponent } from './fulltask/fulltask.component';
import { HomeComponent } from './home/home.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { LoginComponent } from './login/login.component';
import { ProductDetComponent } from './productdet/productdet.component';
import { ServiceExpComponent } from './service-exp/service-exp.component';
import { ServiceExp1Component } from './service-exp1/service-exp1.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'itemlist',component:ItemlistComponent},
  {path:'fulltask',component:FulltaskComponent},
  {path:'service-exp',component:ServiceExpComponent},
  {path:'service-exp1',component:ServiceExp1Component,
    children:[
       {path:'productdet/:pid',component:ProductDetComponent}
     ]},
 // {path:'service-exp1/productdet/:pid',component:ProductDetComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
