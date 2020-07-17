import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolComponent } from './foo/bar/lol/lol.component';
import { SchematicComponent } from './comp/schematic/schematic.component';
import { ExampleComponent } from './schematic/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    LolComponent,
    SchematicComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
