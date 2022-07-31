import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames, FigureLogos } from '../../models';


export class Rook extends Figure {
   isMoved: boolean = false;

   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = FigureLogos[FigureNames.ROOK][color]
      this.name = FigureNames.ROOK
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) {
         return false;
      }
      
      if (this.cell.isEmptyVertical(target)) {
         return true;
      }
      
      if (this.cell.isEmptyHorizontal(target)) {
         return true;
      }
      
      return false;
   }

   moveFigure(target: Cell): void {
      super.moveFigure(target);
      this.isMoved = true;
   }
}