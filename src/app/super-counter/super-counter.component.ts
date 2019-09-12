import { Component, OnInit, Input } from '@angular/core';
import Counter from '../counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() superCounter: Counter;

  constructor() { 
    this.superCounter = new Counter()
  }

  ngOnInit() {
  }

  increment() {
    this.superCounter.totValue += 3;
  }

  decrement() {
    this.superCounter.totValue -= 3;
    this.superCounter.totValue = Math.max(0, this.superCounter.totValue);
  }  

}