import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {Observable} from 'rxjs';
import {AuthState} from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  authState: Observable<AuthState>;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<AppState>) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }
}
