import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames, FigureLogos } from '../../models';
import { Rook } from './Rook';


export class King extends Figure {
   isMoved: boolean = false;
   isShortCastling: boolean = false;
   isLongCastling: boolean = false;

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

      // Castling
      const y = this.cell.y;

      if (!this.isMoved) {
         if (target.x === 6 && target.y === y) {
            if (this.cell.board.getCell(5, y).figure === null && this.cell.board.getCell(6, y).figure === null) {
               const potentialRightRook = this.cell.board.getCell(7, y).figure;
               if (potentialRightRook instanceof Rook && !potentialRightRook.isMoved) {
                  this.isShortCastling = true;
                  return true;
               }
            }
         }

         if (target.x === 2 && target.y === y) {
            if (this.cell.board.getCell(1, y).figure === null && this.cell.board.getCell(2, y).figure === null && this.cell.board.getCell(3, y).figure === null) {
               const potentialLeftRook = this.cell.board.getCell(0, y).figure;
               if (potentialLeftRook instanceof Rook && !potentialLeftRook.isMoved) {
                  this.isLongCastling = true;
                  return true;
               }
            }
         }
      }
      
      return false;
   }

   castleShort() {
      this.cell.board.getCell(7, this.cell.y).figure = null;   
      new Rook(this.color, this.cell.board.getCell(5, this.cell.y));
   }

   castleLong() {
      this.cell.board.getCell(0, this.cell.y).figure = null;   
      new Rook(this.color, this.cell.board.getCell(3, this.cell.y));
   }

   moveFigure(target: Cell): void {
      super.moveFigure(target);
      this.isMoved = true;

      if (this.isShortCastling) {
         this.castleShort();
      }

      if (this.isLongCastling) {
         this.castleLong();
      }
   }
}