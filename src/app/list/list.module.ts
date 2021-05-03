import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { ListEffects } from './store/list.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    EffectsModule.forFeature([ListEffects]),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListModule { }
