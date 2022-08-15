import { ChangeDetectionStrategy, Component } from '@angular/core';
import { random, range } from '../../../helpers/common';

type Cell =
  | {
      type: 'empty' | 'fired';
    }
  | { type: 'ship' | 'fired-ship'; part: 'edge' | 'center'; direction: 'horizontal' | 'vertical' };

@Component({
  selector: 'app-game-page',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamePage {
  public readonly cells: Cell[] = range(100).map(() => ({
    type: random(0, 1) === 0 ? 'empty' : 'fired',
  }));
}
