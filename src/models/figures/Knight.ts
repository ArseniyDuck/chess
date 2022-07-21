import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames, FigureLogos } from '../../models';


export class Knight extends Figure {
   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = FigureLogos[FigureNames.KNIGHT][color]
      this.name = FigureNames.KNIGHT;
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) {
         return false;
      }

      const dx = Math.abs(this.cell.x - target.x)
      const dy = Math.abs(this.cell.y - target.y)
      
      return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
   }
}