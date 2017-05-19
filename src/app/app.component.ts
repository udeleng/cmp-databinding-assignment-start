import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers = [];

  onNumberIncremented(data: {value: number}) {
    console.log("data: " + data.value);
  }

}
