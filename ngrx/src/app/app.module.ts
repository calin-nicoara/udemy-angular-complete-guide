import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // RecipesModules,
    ShoppingListModule,
    AuthModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(appReducers)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
