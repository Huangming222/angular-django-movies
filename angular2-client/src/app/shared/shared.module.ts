import { GenresToTextPipe } from './pipes/genres-to-text.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdSnackBarModule,
  MdCardModule,
  MdListModule,
  MdInputModule,
  MdButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const ANGULAR_MATERIAL_COMPONENTS = [
  MdCardModule,
  MdToolbarModule,
  MdSnackBarModule,
  MdListModule,
  MdInputModule,
  MdButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
    FlexLayoutModule,
    StarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
    ToolbarComponent,
    FlexLayoutModule,
    StarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    GenresToTextPipe
  ],
  declarations: [
    ToolbarComponent,
    GenresToTextPipe
  ],
  providers: [],
})
export class SharedModule { }