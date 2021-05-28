import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListUtentiComponent } from './list-utenti/list-utenti.component';
import { LoginComponent } from './login/login.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const routes: Routes = [
  {
    path:"index",
    component: ListUtentiComponent
  },
  {
    path:"create",
    component: SignUpFormComponent
  },
  {
    path:"edit/:id",
    component: EditComponent
  }
  ,
  {
    path:"",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
