import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowerImageComponent } from './tower-info/tower-image/tower-image.component';
import { TowerInfoComponent } from './tower-info/tower-info.component';
import { IndicatorService } from './indicator.service';

@NgModule({
  declarations: [
    AppComponent,
    TowerInfoComponent,
    TowerImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: TowerInfoComponent },
    ]),
  ],
  providers: [IndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
