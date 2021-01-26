import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { Err404Component } from './err404/err404.component';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {path:"", component:TemplateformComponent},
  {path:"register", component:RegisterComponent},
  {path:"all",component:AllusersComponent},
  {path:"pro", component:ProductsComponent},
  {path:"posts", component:AllPostsComponent},
  {path:"play",component:PlaygroundComponent},
  {path:"posts/:id", component:SinglePostComponent},
  {path:'**',component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
