import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UserModule } from './user/user.module';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user/store/users.reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ListModule } from './list/list.module';
import { listReducer } from './list/store/list.reducer';

const reducers = {
  users: userReducer,
  lists: listReducer
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ListModule,
    FormsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
