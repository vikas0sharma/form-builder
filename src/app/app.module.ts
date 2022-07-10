import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BuilderRoutingModule } from './features/builder/builder-routing.module';
import { BuilderModule } from './features/builder/builder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderRoutingModule,
    CoreModule,
    BuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
