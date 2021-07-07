import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from '../message.service';

import { DebtoragentComponent } from './debtoragent.component';

describe('DebtoragentComponent', () => {
  let component: DebtoragentComponent;
  let fixture: ComponentFixture<DebtoragentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtoragentComponent ],
      providers: [MessageService] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtoragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
