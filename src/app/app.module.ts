import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NumberOnlyDirective } from 'src/shared/directives/number-only.directive';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmailValidatorDirective } from '../shared/directives/email-validator.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DefaultComponent } from './default/default.component';
import { CrudComponent } from './crud/crud.component';
import { DataSharingModule } from './data-sharing/data-sharing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NumberOnlyDirective,
    ReactiveFormComponent,
    EmailValidatorDirective,
    TemplateDrivenFormComponent,
    DefaultComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataSharingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
