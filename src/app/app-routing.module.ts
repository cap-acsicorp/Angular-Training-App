import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { InputComponent } from './data-sharing/input/input.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'home', component: DefaultComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'data-share', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
