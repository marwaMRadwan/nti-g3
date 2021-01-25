import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { RegisterComponent } from './register/register.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {path:"", component:TemplateformComponent},
  {path:"register", component:RegisterComponent},
  {path:"all",component:AllusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
