import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  outputData: number = 0
  inputData = 'Input from App component'
  constructor(){
    setTimeout(() => {
      this.inputData = 'Changed data from root component';
    }, 5000);
  }
  getOutputItem(event:any){
    this.outputData = event;
  }
 
}
