import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponent } from './counter-detail.component';
import { By } from 'protractor';

describe('CounterDetailComponent', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start counter at 0', () => {
    expect(component.counter.totValue).toBe(0);
  });

  it('should increment counter one per click', () => {
    component.counter.totValue = 0;
    component.increment();
    expect(component.counter.totValue).toBe(1);
    component.increment();
    expect(component.counter.totValue).toBe(2);
  });

  it('should decrement counter one per click', () => {
    component.counter.totValue = 10;
    component.decrement();
    expect(component.counter.totValue).toBe(9);
    component.decrement();
    expect(component.counter.totValue).toBe(8);
  });
  
  it('should disable decrement button when total is 0', () => {
    const compiled = fixture.debugElement.nativeElement;

    component.counter.totValue = 0;
    fixture.detectChanges();
    expect(compiled.querySelector('#decrementMe').getAttribute('disabled')).toEqual('');
    
    component.increment();
    fixture.detectChanges();
    expect(compiled.querySelector('#decrementMe').getAttribute('disabled')).toEqual(null);

    component.decrement();
    fixture.detectChanges();
    expect(compiled.querySelector('#decrementMe').getAttribute('disabled')).toEqual('');
  });
});
