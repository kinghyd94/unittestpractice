import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-creditoragent',
  templateUrl: './creditoragent.component.html',
  styleUrls: ['./creditoragent.component.css'],
  providers:[MessageService]
})
export class CreditoragentComponent implements OnInit {
    show:boolean=true;
    hide:boolean=true;
   @Input() creditorDetails:any;
  constructor() { }

  ngOnInit() {
   
  }
  toggleAccordian(name){
    if(name==="creditor_Agent")
    {
           this.show=!this.show;

    }
    else if(name==="credi_tor"){
      this.hide=!this.hide;
    }
  }

}
