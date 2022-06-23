import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { DefaultComponent } from './default/default.component';
import { HomeDashoardComponent } from './home-dashoard/home-dashoard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path: '', component: DefaultComponent},
  {path: 'dashboard', component: HomeDashoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'home', component: DefaultComponent},
  {path: 'crud', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
