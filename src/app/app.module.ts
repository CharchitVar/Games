import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FsMaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';
import { SnakeComponent } from './snake/snake.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { ScoreCardComponent } from './rock-paper-scissors/score-card/score-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnakeComponent,
    RockPaperScissorsComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FsMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
