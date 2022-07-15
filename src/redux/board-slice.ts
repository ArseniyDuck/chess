import { createSlice } from '@reduxjs/toolkit';
import { Cell, Colors, FigureNames } from '../types';
import whitePawn from '../figures/pawn-white.png';
import blackPawn from '../figures/pawn-black.png';
import whiteRook from '../figures/rook-white.png';
import blackRook from '../figures/rook-black.png';
import whiteKnight from '../figures/knight-white.png';
import blackKnight from '../figures/knight-black.png';
import whiteBishop from '../figures/bishop-white.png';
import blackBishop from '../figures/bishop-black.png';
import whiteQueen from '../figures/queen-white.png';
import blackQueen from '../figures/queen-black.png';
import whiteKing from '../figures/king-white.png';
import blackKing from '../figures/king-black.png';


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
                  row.push({ color: Colors.BLACK, x, y, figure: null });
               } else {
                  row.push({ color: Colors.WHITE, x, y, figure: null });
               }
            }

            state.cells.push(row);
         }
      },

      initFigures: (state) => {
         // Pawns
         for (let i = 0; i < 8; i++) {
            state.cells[6][i].figure = {
               name: FigureNames.PAWN,
               color: Colors.WHITE,
               logo: whitePawn,
            }
         }

         for (let i = 0; i < 8; i++) {
            state.cells[1][i].figure = {
               name: FigureNames.PAWN,
               color: Colors.BLACK,
               logo: blackPawn,
            }
         }

         // Bishops
         state.cells[7][2].figure = {
            name: FigureNames.BISHOP,
            color: Colors.WHITE,
            logo: whiteBishop,
         }
         state.cells[7][5].figure = {
            name: FigureNames.BISHOP,
            color: Colors.WHITE,
            logo: whiteBishop,
         }

         state.cells[0][2].figure = {
            name: FigureNames.BISHOP,
            color: Colors.BLACK,
            logo: blackBishop,
         }
         state.cells[0][5].figure = {
            name: FigureNames.BISHOP,
            color: Colors.BLACK,
            logo: blackBishop,
         }

         // Knights
         state.cells[7][1].figure = {
            name: FigureNames.KNIGHT,
            color: Colors.WHITE,
            logo: whiteKnight,
         }
         state.cells[7][6].figure = {
            name: FigureNames.KNIGHT,
            color: Colors.WHITE,
            logo: whiteKnight,
         }

         state.cells[0][1].figure = {
            name: FigureNames.KNIGHT,
            color: Colors.BLACK,
            logo: blackKnight,
         }
         state.cells[0][6].figure = {
            name: FigureNames.KNIGHT,
            color: Colors.BLACK,
            logo: blackKnight,
         }

         // Rooks
         state.cells[7][0].figure = {
            name: FigureNames.ROOK,
            color: Colors.WHITE,
            logo: whiteRook,
         }
         state.cells[7][7].figure = {
            name: FigureNames.ROOK,
            color: Colors.WHITE,
            logo: whiteRook,
         }

         state.cells[0][0].figure = {
            name: FigureNames.ROOK,
            color: Colors.BLACK,
            logo: blackRook,
         }
         state.cells[0][7].figure = {
            name: FigureNames.ROOK,
            color: Colors.BLACK,
            logo: blackRook,
         }

         // Queens
         state.cells[7][3].figure = {
            name: FigureNames.QUEEN,
            color: Colors.WHITE,
            logo: whiteQueen,
         }
         state.cells[0][3].figure = {
            name: FigureNames.QUEEN,
            color: Colors.BLACK,
            logo: blackQueen,
         }

         // Kings
         state.cells[7][4].figure = {
            name: FigureNames.KING,
            color: Colors.WHITE,
            logo: whiteKing,
         }
         state.cells[0][4].figure = {
            name: FigureNames.KING,
            color: Colors.BLACK,
            logo: blackKing,
         }

         state.isInit = true
      }
   },
});

export const { initCells, initFigures } = boardSlice.actions;
export default boardSlice.reducer;