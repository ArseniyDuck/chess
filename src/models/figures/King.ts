import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames, FigureLogos } from '../../models';


export class King extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = FigureLogos[FigureNames.KING][color]
      this.name = FigureNames.KING;
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) {
         return false;
      }

      if ((target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
       && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
       || (target.x === this.cell.x && (target.y === this.cell.y + 1 || target.y === this.cell.y - 1))
       || (target.y === this.cell.y && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1))) {
         return true;
      }
      
      return false;
   }
}