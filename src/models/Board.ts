import { Cell } from './Cell';
import { Pawn, Bishop, Knight, Rook, Queen, King } from './figures';
import { Colors } from '../models';


export class Board {
   cells: Cell[][] = []

   public getCell(x: number, y: number) {
      return this.cells[y][x];
   }

   public initCells() {
      for (let i = 0; i < 8; i++) {
         const row: Cell[] = [];

         for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 !== 0) {
               row.push(new Cell(this, j, i, Colors.BLACK, null));
            } else {
               row.push(new Cell(this, j, i, Colors.WHITE, null));
            }
         }

         this.cells.push(row);
      }
   }

   public initFigures() {
      // Pawns
      for (let i = 0; i < 8; i++) {
         new Pawn(Colors.WHITE, this.getCell(i, 6))
      }

      for (let i = 0; i < 8; i++) {
         new Pawn(Colors.BLACK, this.getCell(i, 1))
      }

      // Bishops
      new Bishop(Colors.WHITE, this.getCell(2, 7))
      new Bishop(Colors.WHITE, this.getCell(5, 7))

      new Bishop(Colors.BLACK, this.getCell(2, 0))
      new Bishop(Colors.BLACK, this.getCell(5, 0))

      // Knights
      new Knight(Colors.WHITE, this.getCell(1, 7))
      new Knight(Colors.WHITE, this.getCell(6, 7))

      new Knight(Colors.BLACK, this.getCell(1, 0))
      new Knight(Colors.BLACK, this.getCell(6, 0))

      // Rooks
      new Rook(Colors.WHITE, this.getCell(0, 7))
      new Rook(Colors.WHITE, this.getCell(7, 7))

      new Rook(Colors.BLACK, this.getCell(0, 0))
      new Rook(Colors.BLACK, this.getCell(7, 0))

      // Queens
      new Queen(Colors.WHITE, this.getCell(3, 7))
      new Queen(Colors.BLACK, this.getCell(3, 0))

      // Kings
      new King(Colors.WHITE, this.getCell(4, 7))
      new King(Colors.BLACK, this.getCell(4, 0))
   }

   public copy() {
      const newBoard = new Board();
      newBoard.cells = this.cells;
      return newBoard;
   }

   public highlightCells(target: Cell | null) {
      for (let row of this.cells) {
         for (let cell of row) {
            if (target) {
               cell.available = !!target.figure?.canMove(cell)
            } else {
               cell.available = false
            }
         }
      }
   }
}