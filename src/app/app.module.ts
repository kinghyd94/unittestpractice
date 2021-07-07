import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagedetailsComponent } from './messagedetails/messagedetails.component';
import { DebtoragentComponent } from './debtoragent/debtoragent.component';
import { CreditoragentComponent } from './creditoragent/creditoragent.component';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateComponent } from './dates/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagedetailsComponent,
    DebtoragentComponent,
    CreditoragentComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
