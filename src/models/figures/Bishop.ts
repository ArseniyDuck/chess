import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames } from '../../types';
import { whiteBishop, blackBishop } from '../../figures';

export class Bishop extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.WHITE ? whiteBishop : blackBishop;
      this.name = FigureNames.BISHOP
   }
}