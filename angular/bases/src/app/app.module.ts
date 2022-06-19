import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
