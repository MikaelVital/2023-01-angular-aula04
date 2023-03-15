import { CommonModule } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
})
export class FlowComponent implements OnInit {
  numbers: number[] = [];
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  numRandom: number;

  constructor() {}

  ngOnInit() {}

  getNumbers() {
    this.numbers = [];
    for (let i = 0; i < this.numRandom; i++) {
      this.numbers.push(Math.floor(Math.random() * 100));
    }
    this.evenNumbers = this.numbers.filter((num) => num % 2 === 0);
    this.oddNumbers = this.numbers.filter((num) => num % 2 !== 0);
  }

  /*   getNumbers() {
    return [10, 6, 23, 97, 1, 27];
  }
  constructor() {}

  ngOnInit() {} */
}
