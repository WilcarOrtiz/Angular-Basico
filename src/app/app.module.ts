import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/Heroes.module';
import { ContadorModule } from './contador/contadorModule.module';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    HeroesModule,
    ContadorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
