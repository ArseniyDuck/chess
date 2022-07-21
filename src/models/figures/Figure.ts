import { Cell } from '../Cell';
import { Colors, FigureNames } from '../../models'


export class Figure {
   color: Colors;
   logo: string | null;
   cell: Cell;
   name: FigureNames;

   constructor(color: Colors, cell: Cell) {
      this.color = color;
      this.logo = null;
      this.cell = cell;
      this.cell.figure = this;
      this.name = FigureNames.FIGURE;
   }

   canMove(target: Cell): boolean {
      if (target.figure?.color === this.color) {
         return false;
      }
      
      if (target.figure?.name === FigureNames.KING) {
         return false;
      }
      
      return true;
   }

   moveFigure(target: Cell) {}
}