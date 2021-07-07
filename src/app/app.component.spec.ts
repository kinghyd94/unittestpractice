import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CreditoragentComponent } from './creditoragent/creditoragent.component';
import { DebtoragentComponent } from './debtoragent/debtoragent.component';
import { MessageService } from './message.service';
import { MessagedetailsComponent } from './messagedetails/messagedetails.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,MessagedetailsComponent,DebtoragentComponent,CreditoragentComponent
      ],
      providers: [MessageService] 
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'isocentric'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log(app);
    expect(app.title).toEqual('isocentric');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to isocentric!');
  });

    it('Sample Test',()=>{
        const test=10
        expect(test).toBe(10)
    });

});
