import { NgModule } from '@angular/core';
import { GamePage } from './game.page';
import { GameRoutingModule } from './game-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, GameRoutingModule],
  declarations: [GamePage],
})
export class GameModule {}
