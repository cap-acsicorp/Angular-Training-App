import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  model: any = {};
  userData: any = [];
  constructor() {}

  ngOnInit(): void {
    this.userData = [];
  }

  onSubmit(form: any) {
    this.userData.push({
      firstname: this.model.firstName,
      lastname: this.model.lastName,
      optemail: this.model.optEmail,
      password: this.model.password,
      email: this.model.emailOptTxt ? this.model.emailOptTxt : 'NA',
    });
    form.reset();
  }
}
