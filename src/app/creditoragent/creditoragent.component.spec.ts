import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoragentComponent } from './creditoragent.component';

describe('CreditoragentComponent', () => {
  let component: CreditoragentComponent;
  let fixture: ComponentFixture<CreditoragentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoragentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
