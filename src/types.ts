export type Cell = {
   x: number
   y: number
   color: Colors
   figure: null | Figure
}

export type Figure = {
   name: FigureNames
   logo: string
   color: Colors
}

export enum Colors {
   WHITE = 'white',
   BLACK = 'black'
}

export enum FigureNames {
   PAWN = 'pawn',
   BISHOP = 'BISHOP',
   KNIGHT = 'knight',
   ROOK = 'rook',
   QUEEN = 'queen',
   KING = 'king',
}