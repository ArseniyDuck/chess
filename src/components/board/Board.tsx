import React, { useEffect, useState } from 'react';
import s from './Board.module.scss';
import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';
import { Pawn } from '../../models/figures';
import { PromotionFigures } from '../../models';
import CellComponent from '../cell/Cell';
import PromotionForm from '../promotion-form/PromotionForm';


type PropsType = {
   board: Board
   setBoard: React.Dispatch<React.SetStateAction<Board>>
};

const BoardComponent: React.FC<PropsType> = ({ board, setBoard }) => {
   const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
   const [promotionPawn, setPromotionPawn] = useState<Pawn | null>(null);

   const updateBoard = () => {
      const newBoard = board.copy();
      setBoard(newBoard);
   };

   const highlightCells = () => {
      board.highlightCells(selectedCell);
      updateBoard();
   };
   
   useEffect(() => {
      highlightCells();
   }, [selectedCell]);

   const promoteFigure = (pawn: Pawn, figure: PromotionFigures) => {
      return () => {
         pawn.promote(figure);
         setPromotionPawn(null);
      };
   };

   return (
      <div className={s.board}>
         {promotionPawn && (
            <PromotionForm pawn={promotionPawn} promoteFigure={promoteFigure} />
         )}
         {board.cells.map(row => row.map((cell, index) => (
            <CellComponent
               key={index}
               cell={cell}
               selectedCell={selectedCell}
               setSelectedCell={setSelectedCell}
               setPromotionPawn={setPromotionPawn}
            />
         )))}
      </div>
   );
};

export default BoardComponent;