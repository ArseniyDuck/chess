import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames } from '../../types';
import { whiteKnight, blackKnight } from '../../figures';

export class Knight extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.WHITE ? whiteKnight : blackKnight;
      this.name = FigureNames.KNIGHT;
   }
}