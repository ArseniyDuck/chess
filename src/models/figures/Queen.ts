import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames } from '../../types';
import { whiteQueen, blackQueen } from '../../figures';

export class Queen extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.WHITE ? whiteQueen : blackQueen;
      this.name = FigureNames.QUEEN;
   }
}