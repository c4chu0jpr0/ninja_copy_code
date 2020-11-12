import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormAddComponent } from './form-add/form-add.component';
import { ListDataComponent } from './list-data/list-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAddComponent,
    ListDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
