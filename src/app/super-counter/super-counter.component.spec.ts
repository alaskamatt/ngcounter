import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCounterComponent } from './super-counter.component';

describe('SuperCounterComponent', () => {
  let component: SuperCounterComponent;
  let fixture: ComponentFixture<SuperCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should start counter at 0', () => {
  //   expect(component.superCounter.totValue).toBe(0);
  // });

  it('should increment counter 3 per click', () => {
    component.superCounter.totValue = 2;
    component.increment();
    expect(component.superCounter.totValue).toBe(5);
    component.increment();
    expect(component.superCounter.totValue).toBe(8);
  });

  it('should decrement counter 3 per click', () => {
    component.superCounter.totValue = 5;
    component.decrement();
    expect(component.superCounter.totValue).toBe(2);
    component.decrement();
    expect(component.superCounter.totValue).toBe(0);
  });
  
  it('should disable when 0', () => {
    const compiled = fixture.debugElement.nativeElement;

    component.superCounter.totValue = 0;
    fixture.detectChanges();
    expect(compiled.querySelector('#decrementSuper').getAttribute('disabled')).toEqual('');
    
    component.increment();
    fixture.detectChanges();
    expect(compiled.querySelector('#decrementSuper').getAttribute('disabled')).toEqual(null);

    component.decrement();
    fixture.detectChanges();
    expect(compiled.querySelector('#decrementSuper').getAttribute('disabled')).toEqual('');
  });


});
