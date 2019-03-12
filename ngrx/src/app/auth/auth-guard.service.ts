import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AppState} from '../store/app.reducers';
import {Store} from '@ngrx/store';
import {AuthState} from './store/auth.reducers';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(
      map((authState: AuthState) => authState.authenticated)
    );
  }
}
