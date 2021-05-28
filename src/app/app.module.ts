import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponentComponent } from './list-book-component/list-book-component.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ListUtentiComponent } from './list-utenti/list-utenti.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponentComponent,
    SignUpFormComponent,
    ListUtentiComponent,
    EditComponent,
    LoginComponent,
    LocalStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
