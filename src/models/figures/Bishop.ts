import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames, FigureLogos } from '../../models';


export class Bishop extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = FigureLogos[FigureNames.BISHOP][color]
      this.name = FigureNames.BISHOP
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) {
         return false;
      }

      if (this.cell.isEmptyDiagonal(target)) {
         return true;
      }
      
      return false;
   }
}