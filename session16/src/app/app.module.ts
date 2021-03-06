import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { RegisterComponent } from './register/register.component';
import { AllusersComponent } from './allusers/allusers.component';
import { ProductsComponent } from './products/products.component';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { PlaygroundComponent } from './playground/playground.component';
import { Err404Component } from './err404/err404.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    RegisterComponent,
    AllusersComponent,
    ProductsComponent,
    AllPostsComponent,
    SinglePostComponent,
    PlaygroundComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
