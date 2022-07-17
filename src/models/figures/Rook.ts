import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames } from '../../types';
import { whiteRook, blackRook } from '../../figures';

export class Rook extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.WHITE ? whiteRook : blackRook;
      this.name = FigureNames.ROOK
   }
}