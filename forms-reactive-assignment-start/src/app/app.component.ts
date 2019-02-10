import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.asynNameValidator.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }


  onSubmit() {
    console.log(this.signupForm.value);
  }

  nameValidator(control: FormControl): {[key: string]: boolean} {
    if(control.value === 'TEST') {
      return {'invalidName': true}
    } else {
      return null;
    }
  }

  asynNameValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.nameValidator(control)), 500);
    })
  }
}
