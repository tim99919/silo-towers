import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowerImageComponent } from './tower-info/tower-image/tower-image.component';
import { TowerInfoComponent } from './tower-info/tower-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TowerInfoComponent,
    TowerImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
