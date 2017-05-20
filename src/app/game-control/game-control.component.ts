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
    if (!this.intervalID) {
      this.intervalID = setInterval(this.increment.bind(this), 2000);
    }
  }

  stopGame() {
    if (this.intervalID > 0) {
      clearInterval(this.intervalID);
      this.intervalID = 0;
    }
  }

  increment() {
    this.numberIncremented.emit({
      value: this.counter++
    });
  }

}
