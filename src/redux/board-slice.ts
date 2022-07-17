import { createSlice } from '@reduxjs/toolkit';
import { Pawn, Bishop, Knight, Rook, Queen, King } from '../models/figures'
import { Cell } from '../models/Cell'
import { Colors } from '../types';


type initialStateType = {
   cells: Cell[][]
   isInit: boolean
}

const initialState: initialStateType = {
   cells: [],
   isInit: false
}

export const boardSlice = createSlice({
   name: 'board',
   initialState,
   reducers: {
      initCells: (state) => {
         for (let x = 0; x < 8; x++) {
            const row: Cell[] = [];

            for (let y = 0; y < 8; y++) {
               if ((x + y) % 2 !== 0) {
                  row.push(new Cell(x, y, Colors.BLACK, null));
               } else {
                  row.push(new Cell(x, y, Colors.BLACK, null));
               }
            }

            state.cells.push(row);
         }
      },

      initFigures: (state) => {
         // Pawns
         for (let i = 0; i < 8; i++) {
            new Pawn(Colors.WHITE, state.cells[6][i])
         }

         for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, state.cells[1][i])
         }

         // Bishops
         new Bishop(Colors.WHITE, state.cells[7][2])
         new Bishop(Colors.WHITE, state.cells[7][5])

         new Bishop(Colors.WHITE, state.cells[0][2])
         new Bishop(Colors.WHITE, state.cells[0][5])

         // Knights
         new Knight(Colors.WHITE, state.cells[7][1])
         new Knight(Colors.WHITE, state.cells[7][6])

         new Knight(Colors.WHITE, state.cells[0][1])
         new Knight(Colors.WHITE, state.cells[0][6])

         // Rooks
         new Rook(Colors.WHITE, state.cells[7][0])
         new Rook(Colors.WHITE, state.cells[7][7])

         new Rook(Colors.WHITE, state.cells[0][0])
         new Rook(Colors.WHITE, state.cells[0][7])

         // Queens
         new Queen(Colors.WHITE, state.cells[7][3])
         new Queen(Colors.WHITE, state.cells[0][3])

         // Kings
         new King(Colors.WHITE, state.cells[7][4])
         new King(Colors.WHITE, state.cells[0][4])

         state.isInit = true
      }
   },
});

export const { initCells, initFigures } = boardSlice.actions;
export default boardSlice.reducer;