import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;

  defaultSelect = 'teacher';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(formElement: HTMLFormElement) {
  //   console.log("Submitted");
  //   console.log(formElement);
  // }

  onSubmit() {
    console.log(this.form);
  }
}
