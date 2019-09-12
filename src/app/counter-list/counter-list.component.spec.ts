import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from './counter-list.component';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CounterListComponent, 
        CounterDetailComponent
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
});
