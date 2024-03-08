import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './Counter/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes-module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [
    AppComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
