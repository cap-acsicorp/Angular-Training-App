import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() getInput : any = '';
  @Output() getOutput = new EventEmitter<any>();
  interval:any;
  constructor() { }

  ngOnInit(): void {
  }

  transferData(){
    clearInterval(this.interval)
    let count = 0;
    this.interval = setInterval(()=>{
      this.getOutput.emit(count++);
    },1000)
  }


}
