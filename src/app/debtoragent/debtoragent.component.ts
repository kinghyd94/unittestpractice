import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-debtoragent',
  templateUrl: './debtoragent.component.html',
  styleUrls: ['./debtoragent.component.css'],
  providers:[MessageService]
})
export class DebtoragentComponent implements OnInit {
    show:boolean=true;
    hide:boolean=true;
   @Input() debtor_details:any;
   @Output() testvalue=new EventEmitter<string>();
  constructor() { }

  clickTest(){
    this.testvalue.emit("Hi This is STR");
  }
  ngOnInit() {
  
  }
  toggleAccordian(name){
    if(name==="Debtor_Agent")
    {
           this.show=!this.show;

    }
    else if(name==="deb_tor"){
      this.hide=!this.hide;
    }
  }


}
