import { Component, Input, OnInit } from '@angular/core';
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
 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.applyClass = 1;
    }, 5000);
    setTimeout(() => {
      this.name = 'Adam';
    }, 10000);
    let count = 0;
    const interval = setInterval(() => {
      count++
      if(count != 10){
        this.dataset.push({key:'Roll Number:', value: count})
      }else{
        clearInterval(interval)
      }  
    },1000)
    const date = new Date();
    this.todayDate = date.toLocaleDateString();
    
  }
  callMe(){
    console.log('Hi your name is' + this.name);
  }

  onClick(){
    this.dataService.setTestData(this.name);
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
