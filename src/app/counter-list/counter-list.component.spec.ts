import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterListComponent } from './counter-list.component';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CounterListComponent, 
        CounterDetailComponent,
        SuperCounterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty counter list at start', () => {
    expect(component.countersList.length).toBe(0);
  })

  it('should add a counter upon click()', () => {
    component.countersList = [];
    component.create();
    expect(component.countersList.length).toBe(1);
    component.create();
    expect(component.countersList.length).toBe(2);
  })

  it('should remove all counters when adding 6th counter', () => {
    component.countersList.length = 5;
    component.create();
    expect(component.countersList.length).toBe(0);
  })

  it('should add super counter when adding 6th counter', () => {
    component.countersList.length = 5;
    component.create();
    expect(component.superCountersList.length).toBe(1);
  })

  it('should start super counter at total of 6 removed counters', () => {
    component.superCountersList = [];
    component.countersList = [
      {totValue: 11},
      {totValue: 10},
      {totValue: 3},
      {totValue: 0},
      {totValue: 1}];
    component.create();
    expect(component.superCountersList[0].totValue).toBe(25);
  });

});
