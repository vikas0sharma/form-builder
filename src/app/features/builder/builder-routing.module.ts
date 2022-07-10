import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from '../builder.component';

const routes: Routes = [
  { path: 'builder', component: BuilderComponent },
  { path: '', redirectTo: '/builder', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuilderRoutingModule { }
