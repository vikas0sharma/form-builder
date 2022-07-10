import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from '../builder.component';
import { DynamicFormDirective } from './directives/dynamic-form.directive';
import { PropertiesComponent } from './components/properties/properties.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { FormItemOptionsComponent } from './components/form-item-options/form-item-options.component';


@NgModule({
  declarations: [
    BuilderComponent,
    DynamicFormDirective,
    BuilderComponent,
    PropertiesComponent,
    ParagraphComponent,
    FormItemOptionsComponent,
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
