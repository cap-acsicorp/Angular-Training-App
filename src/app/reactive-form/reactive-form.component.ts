import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { emailValidator } from 'src/shared/directives/email-validator.directive';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  user: any;
  userData: any = [];
  response: any = [];

  constructor(private dataService: DataService) {
    this.user = {} as any;
    this.userData = [];
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
      nickname: new FormControl(this.user.nickname, [Validators.maxLength(10)]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get nickname() {
    return this.reactiveForm.get('nickname')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }

  public register(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }
    this.user = this.reactiveForm.value;
    this.userData.push({
      name: this.user.name,
      nickname: this.user.nickname,
      email: this.user.email,
      password: this.user.password,
    });
    this.resetForm();
  }

  setFormValue(data?: any) {
    this.reactiveForm.patchValue({
      name: data.name,
      nickname: data.nickname,
      email: data.email,
      password: data.password,
    });
  }

  fillForm() {
    const data = {
      name: 'James',
      nickname: 'Jimmy',
      email: 'james@mail.com',
      password: 'rtmn@[384^ll#$hfjdh&&&',
    };
    this.setFormValue(data);
  }

  resetForm() {
    this.reactiveForm.reset();
  }

  disableControls() {
    this.reactiveForm.controls['email'].disable();
    this.reactiveForm.get('name')?.disable();
  }
}
