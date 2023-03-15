import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MeComponent } from './me/me.component';
import { TimerComponent } from './timer/timer.component';
import { FlowComponent } from './flow/flow.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MeComponent, TimerComponent, FlowComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <app-me />
    <app-timer />
    <app-flow />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
