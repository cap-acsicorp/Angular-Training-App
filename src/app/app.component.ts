import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  username: any;
  constructor(private router:Router,private dataService: DataService){
  this.username = sessionStorage.getItem('loggedinUser'); 
  this.username ? this.dataService.setUserName(this.username) : '';
  this.dataService.userName$.subscribe(username =>{ 
    this.username = username;
    })
  }

  logout(){
    sessionStorage.setItem('loggedinUser','');
    this.dataService.setUserName('')
    this.router.navigate(['/login'])
  }
}
