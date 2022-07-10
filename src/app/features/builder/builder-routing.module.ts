import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from '../builder.component';
import { TextFieldComponent } from './components/text-field/text-field.component';

const routes: Routes = [
  {path:'builder', component : BuilderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[ TextFieldComponent]
})
export class BuilderRoutingModule { }
