import { Cell } from '../Cell';
import { Figure } from './Figure';
import { Colors, FigureNames, FigureLogos, PromotionFigures } from '../../models';
import { Queen, Rook, Knight, Bishop } from '../../models/figures';


export class Pawn extends Figure {
   movesCount: number = 0;
   isReadyToPromote: boolean = false;
   isEnPassant: boolean = false;

   constructor(color: Colors, cell: Cell) {
      super(color, cell);
      this.logo = FigureLogos[FigureNames.PAWN][color]
      this.name = FigureNames.PAWN;
   }

   canMove(target: Cell): boolean {
      if (!super.canMove(target)) {
         return false;
      }

      const direction = this.color === Colors.BLACK ? 1 : -1;
      const firstStepDirection = this.color === Colors.BLACK ? 2 : -2;

      const firstStep = !this.movesCount && (target.y === this.cell.y + firstStepDirection) && this.cell.board.getCell(target.x, this.cell.y + direction).isEmpty()

      // Move forward
      if ((target.y === this.cell.y + direction || firstStep)
       && target.x === this.cell.x
       && this.cell.board.getCell(target.x, target.y).isEmpty()
      ) {
         return true;
      }

      // Attack a figure
      if (target.y === this.cell.y + direction
       && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
       && this.cell.isEnemy(target)
      ) {
         return true;
      }

      // En passant
      if (target.y === this.cell.y + direction) {
         if (this.cell.y === 3.5 + direction / 2) {
            if (target.x === this.cell.x + 1) {
               const rightCell = this.cell.board.getCell(this.cell.x + 1, 3.5 + direction / 2);
               if (rightCell.figure instanceof Pawn && rightCell.figure.movesCount === 1) {
                  this.isEnPassant = true;
                  return true;
               }
            }

            if (target.x === this.cell.x - 1) {
               const leftCell = this.cell.board.getCell(this.cell.x - 1, 3.5 + direction / 2);
               if (leftCell.figure instanceof Pawn && leftCell.figure.movesCount === 1) {
                  this.isEnPassant = true;
                  return true;
               }
            }
         }
      }

      return false;
   }

   enPassant(pawnColor: Colors, target: Cell) {
      const direction = pawnColor === Colors.BLACK ? 1 : -1;
      target.board.getCell(target.x, target.y - direction).figure = null;
   }

   promote(figure: PromotionFigures) {
      let newFigure: Figure;

      switch (figure) {
         case FigureNames.QUEEN:
            newFigure = new Queen(this.color, this.cell);
            break;
         case FigureNames.ROOK:
            newFigure = new Rook(this.color, this.cell);
            break;
         case FigureNames.KNIGHT:
            newFigure = new Knight(this.color, this.cell);
            break;
         case FigureNames.BISHOP:
            newFigure = new Bishop(this.color, this.cell);
            break;
      }

      this.cell.figure = newFigure;
      this.isReadyToPromote = false;
   }

   moveFigure(target: Cell) {
      super.moveFigure(target);
      this.movesCount++;

      if ((this.cell.y === 1 && this.color === Colors.WHITE)
       || (this.cell.y === 6 && this.color === Colors.BLACK)) {
         this.isReadyToPromote = true;
      }

      if (this.isEnPassant) {
         this.enPassant(this.color, target);
         this.isEnPassant = false;
      }
   }
}