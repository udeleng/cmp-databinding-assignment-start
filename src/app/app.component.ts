import { Component } from '@angular/core';

import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers = [];

  onNumberIncremented(data: {value: number}) {
    this.numbers.push(data.value);
  }

}
