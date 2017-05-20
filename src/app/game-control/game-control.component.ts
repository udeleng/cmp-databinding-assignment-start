import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter: number = 0;

  intervalID;

  @Output() numberIncremented = new EventEmitter<{value: number}>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    console.log("starting...");
    if (!this.intervalID) {
      this.intervalID = setInterval(this.increment.bind(this), 2000);
      console.log("started: " + this.intervalID);
    } else {
      console.log("game already running");
    }
  }

  stopGame() {
    console.log("stopping...");
    if (this.intervalID > 0) {
      clearInterval(this.intervalID);
      this.intervalID = 0;
      this.counter = 0;
      console.log("stopped");
    } else {
      console.log("game already stopped");
    }
  }

  increment() {
    this.counter = this.counter + 1;
    this.numberIncremented.emit({
      value: this.counter
    });
    console.log('number incremented to ' + this.counter);
  }

}
