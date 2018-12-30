import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incrementsReceived: number[] = [];

  onIncrement(increment: number) {
    this.incrementsReceived.push(increment);
    console.log("Increment received:" + increment);
  }
}
