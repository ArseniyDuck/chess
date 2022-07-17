import { Colors, FigureNames } from '../../types';
import { Cell } from '../Cell';

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
      return true;
   }

   moveFigure(target: Cell) {

   }
}