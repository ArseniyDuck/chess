import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames } from '../../types';
import { whitePawn, blackPawn } from '../../figures';

export class Pawn extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = color === Colors.WHITE ? whitePawn : blackPawn;
      this.name = FigureNames.PAWN;
   }
}