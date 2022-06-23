import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home-dashoard',
  templateUrl: './home-dashoard.component.html',
  styleUrls: ['./home-dashoard.component.css']
})
export class HomeDashoardComponent implements OnInit {
  testData: any ='initial Value';
  previousData =  new ReplaySubject()
  @Input() getInput : any = '';
  @Output() getOutput = new EventEmitter<any>();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.testSubject$.subscribe(data => {
      
    //     this.testData = data;
    //     this.previousData.next(data);
     
    //   this.previousData.next('afte subs');
    // })
    // this.previousData.subscribe(prevData => {
    //   console.log('all history',prevData)
    // })

    // this.previousData.subscribe(prevData => {
    //   console.log('all history 2',prevData)
    // })

const mySubject = new ReplaySubject(1);

mySubject.next(1);
mySubject.next(2);
mySubject.next(3);
mySubject.next(4);

mySubject.subscribe(x => {
  console.log('From 1st sub:', x);
});

mySubject.next(5);

mySubject.subscribe(x => {
  console.log('From 2nd sub:', x);
});
  }

  transferData(){
    let count = 0;
    this.getOutput.emit('Hey I am coming from dashboard');
    setInterval(()=>{
      this.getOutput.emit(count++);
    },1000)
  }

}
