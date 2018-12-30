import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementEmitter = new EventEmitter<number>();

  eventEmitterInterval;
  increment = 1;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.eventEmitterInterval = setInterval(() => {
      this.incrementEmitter.emit(this.increment++);
    }, 1000);
  }

  endGame() {
    clearInterval(this.eventEmitterInterval);
  }
}
