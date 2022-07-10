import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from '../builder.component';
import { DynamicFormDirective } from './directives/dynamic-form.directive';
import { PropertiesComponent } from './components/properties/properties.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { FormItemOptionsComponent } from './components/form-item-options/form-item-options.component';
import { FormsModule } from '@angular/forms';
import { FormItemContainerComponent } from './components/form-item-container/form-item-container.component';
import { TextFieldComponent } from './components/text-field/text-field.component';


@NgModule({
  declarations: [
    BuilderComponent,
    DynamicFormDirective,
    BuilderComponent,
    PropertiesComponent,
    ParagraphComponent,
    FormItemOptionsComponent,
    FormItemContainerComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BuilderRoutingModule,
  ]
})
export class BuilderModule { }
