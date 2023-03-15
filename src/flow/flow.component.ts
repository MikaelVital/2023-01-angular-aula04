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
  getNumbers() {
    return [10, 6, 23, 97, 1, 27];
  }
  constructor() {}

  ngOnInit() {}
}
