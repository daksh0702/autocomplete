import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-val',
  templateUrl: './name-val.component.html',
  styleUrls: ['./name-val.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameValComponent implements OnInit {
  @Input() val:any;
  @Input() inputVal:any;
  @Output() myEvent = new EventEmitter()
  beg:string='';
  end:string ='';
  highlightVal:string=''
  constructor() { }
  

  ngOnInit(): void {
    let i = this.val.indexOf(this.inputVal)
    this.beg = this.val.slice(0,i)  
    this.end = this.val.slice(i+this.inputVal.length)
  }

  fillInputWithVal(){
    this.myEvent.emit(this.val)
  }

}
