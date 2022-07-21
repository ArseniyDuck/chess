import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames, FigureLogos } from '../../models';


export class Queen extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = FigureLogos[FigureNames.QUEEN][color]
      this.name = FigureNames.QUEEN;
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
      
      if (this.cell.isEmptyDiagonal(target)) {  
         return true;
      }
      
      return false;
   }
}