import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagedetailsComponent } from './messagedetails.component';

describe('MessagedetailsComponent', () => {
  let component: MessagedetailsComponent;
  let fixture: ComponentFixture<MessagedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('im checking the trasaction type in the the form',()=>{
   
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1 > a').textContent).toContain('Welcome to isocentric!');
  })
});
