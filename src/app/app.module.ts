import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteComponent } from './component/crud/delete/delete.component';
import { UpdateComponent } from './component/crud/update/update.component';
import { AddComponent } from './component/crud/add/add.component';
import { HomeComponent } from './component/home/home.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    UpdateComponent,
    AddComponent,
    HomeComponent,

    NavbarComponent,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
