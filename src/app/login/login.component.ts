import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  headerName: string = 'Login Header';
  applyClass:any = '';
  name:any = 'Peter';
  dataset:any = [];
  todayDate: string = '';
  model: any = {};
 

  constructor(private router:Router,private dataService: DataService) {
    sessionStorage.setItem('loggedinUser','');
    this.dataService.setUserName('');
   }

  ngOnInit(): void { }

  onClick(){
    this.dataService.setTestData(this.name);
  }

  onSubmit() {
    this.router.navigate(['/home'])
    this.dataService.setUserName(this.model.userName);
    sessionStorage.setItem('loggedinUser',this.model.userName);
  }

}
