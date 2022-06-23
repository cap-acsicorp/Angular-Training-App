import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  userData: any = [];
  val: any = 100;
  date: any = new Date()
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.dataService.getData().subscribe(
      (res: any) => {
        console.log('data from api response', res);
        this.userData = res;
        console.log('response', this.userData);
      },
      (err) => {
        console.info('Error while fetching the data', err);
      }
    );
  }

  addNewUser() {
    let userId = 0;
    if (this.userData.length > 0) {
      let lastUserRecord = this.userData[this.userData.length - 1];
      userId = lastUserRecord.id + 1;
    } else {
      userId = 1;
    }
    const data = {
      id: userId,
      email: '',
      first_name: '',
      last_name: '',
      avatar: 'http://www.gravatar.com/avatar/?d=mp',
    };
    this.saveUser(data);
  }

  saveUser(data: any) {
    const param = {
      id: data.id,
      email: 'Enter Email',
      first_name: 'Enter First Name',
      last_name: 'Enter Last Name',
      avatar: data.avatar,
    };
    this.dataService.postData(param, data.id).subscribe(
      (res) => {
        this.getUserData();
      },
      (err) => {
        alert('Opration was failed');
      }
    );
  }

  deleteUser(id: any) {
    this.dataService.deleteData(id).subscribe(
      (res) => {
        alert('Data has been successfully deleted');
        this.getUserData();
      },
      (err) => {
        alert('Delete opration was failed');
      }
    );
  }

  updateUser(data: any) {
    const param = {
      id: data.id,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      avatar: data.avatar,
    };
    this.dataService.updateData(param, data.id).subscribe(
      (res) => {
        alert('Data has been updated');
        this.getUserData();
      },
      (err) => {
        alert('Update opration was failed');
      }
    );
  }
}
