import { blackBishop, blackKing, blackKnight,
   blackPawn, blackQueen, blackRook, whiteBishop,
   whiteKing, whiteKnight, whitePawn, whiteQueen, whiteRook
} from '../figures';

export enum Colors {
   WHITE = 'white',
   BLACK = 'black'
}

export enum FigureNames {
   FIGURE = 'figure',
   PAWN = 'pawn',
   BISHOP = 'bishop',
   KNIGHT = 'knight',
   ROOK = 'rook',
   QUEEN = 'queen',
   KING = 'king',
}

export type PromotionFigures = FigureNames.QUEEN | FigureNames.ROOK | FigureNames.KNIGHT | FigureNames.BISHOP

export const FigureLogos: {[k in FigureNames]: {
   [k in Colors]: string
}} = {
   [FigureNames.PAWN]: {
      [Colors.WHITE]: whitePawn,
      [Colors.BLACK]: blackPawn,
   },
   [FigureNames.BISHOP]: {
      [Colors.WHITE]: whiteBishop,
      [Colors.BLACK]: blackBishop,
   },
   [FigureNames.KNIGHT]: {
      [Colors.WHITE]: whiteKnight,
      [Colors.BLACK]: blackKnight,
   },
   [FigureNames.ROOK]: {
      [Colors.WHITE]: whiteRook,
      [Colors.BLACK]: blackRook,
   },
   [FigureNames.QUEEN]: {
      [Colors.WHITE]: whiteQueen,
      [Colors.BLACK]: blackQueen,
   },
   [FigureNames.KING]: {
      [Colors.WHITE]: whiteKing,
      [Colors.BLACK]: blackKing,
   },
   [FigureNames.FIGURE]: {
      black: '',
      white: '',
   }
} as const;