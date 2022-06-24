import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  outputData: number = 0
  inputData = 'Input from Output component = 5'
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputData = 'Changed data from output component is 10';
    }, 5000);
  }

  getOutputItem(event:any){
    this.outputData = event;
  }

}
