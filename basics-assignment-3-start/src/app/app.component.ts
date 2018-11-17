import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: boolean = true;
  clicks: Date[] = [];

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.clicks.push(new Date());
  }

  getColor(index) {
    return index > 4 ? 'blue' : '';
    // this.clicks.indexOf(clickItem)
  }
}
