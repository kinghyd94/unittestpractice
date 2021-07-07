import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messagedetails',
  templateUrl: './messagedetails.component.html',
  styleUrls: ['./messagedetails.component.css'],
  providers:[MessageService]
})
export class MessagedetailsComponent implements OnInit {
  show: boolean = true;
  hide: boolean = true;
  messageDetails: any;
  messageForm=this.formbuilder.group({
    transactionType:['',Validators.required],
    transactionAmount:['',Validators.compose([Validators.required,Validators.minLength(2)])]
  })
  

  constructor(private messageService:MessageService,private httpClient:HttpClient,private formbuilder:FormBuilder) { 
    
  }

  ngOnInit() {
   
    this.messageService.getJSON().subscribe(data => {
      console.log(data)
        this.messageDetails=data;
        console.log(this.messageDetails)
        this.messageForm=this.formbuilder.group({
          transactionType:[data.transaction.transactionType,Validators.required],
          transactionAmount:[data.transaction.transactionAmount,Validators.compose([Validators.required,Validators.minLength(2)])]
        })
  });
  }

  toggleAccordian(name) {
    if (name === "custom_fields") {
      this.show = !this.show;
    }
    else if (name === "special_instructions") {
      this.hide = !this.hide;
    }
  }


  onSubmit(){
    console.log(this.messageForm)
  }
}
