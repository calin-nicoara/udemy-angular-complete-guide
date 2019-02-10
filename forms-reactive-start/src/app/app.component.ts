import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signUpForm: FormGroup;
  forbiddenUsername = ['Cris', 'Ana'];


  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signUpForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // })

    this.signUpForm.statusChanges.subscribe(status => console.log(status));

    this.signUpForm.setValue({
      userData: {
        username: 'MAx',
        email: 'max@test.com'
      },
      gender: 'male',
      hobbies: []
    });

    this.signUpForm.patchValue({
      userData: {
        username: 'Ana'
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  onAddHobby() {
    let hobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(hobbyControl);
  }

  forbiddenName(control: FormControl): {[s: string]: boolean}{
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    } else {
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 100);

    });
  }
}
