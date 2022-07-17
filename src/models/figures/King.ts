import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames } from '../../types';
import { whiteKing, blackKing } from '../../figures';

export class King extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.WHITE ? whiteKing : blackKing;
      this.name = FigureNames.KING;
   }
}