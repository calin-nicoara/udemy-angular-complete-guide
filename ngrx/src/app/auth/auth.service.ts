import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {AppState} from '../store/app.reducers';
import {Store} from '@ngrx/store';
import {Login, Logout, SetToken, Signup} from './store/auth.actions';

@Injectable()
export class AuthService {
  constructor(private router: Router, private store: Store<AppState>) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.store.dispatch(new Signup());
        firebase.auth().currentUser.getToken()
          .then(
            (token: string) => this.store.dispatch(new SetToken(token))
          )
      })
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => this.store.dispatch(new Login()))
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.store.dispatch(new SetToken(token))
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new Logout());
  }
}
