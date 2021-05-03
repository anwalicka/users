import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEffects } from './store/list.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddListItemComponent } from './components/list/add-list-item/add-list-item.component';

@NgModule({
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent,
    AddListItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ListEffects]),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ListModule { }
