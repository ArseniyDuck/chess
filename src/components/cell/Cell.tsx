import React from 'react';
import s from './Cell.module.scss';
import { Cell } from '../../models/Cell'
import { Pawn } from '../../models/figures';
import { Colors } from '../../models';


type PropsType = {
   cell: Cell
   selectedCell: Cell | null
   setSelectedCell: React.Dispatch<React.SetStateAction<Cell | null>>
   setPromotionPawn: React.Dispatch<React.SetStateAction<Pawn | null>>
};

const CellComponent: React.FC<PropsType> = (props) => {
   const { cell, selectedCell, setSelectedCell, setPromotionPawn } = props;
   const {color, figure} = cell;
   
   const handleClick = () => {
      if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
         selectedCell.moveFigure(cell);
         if (cell.figure instanceof Pawn && cell.figure.isReadyToPromote) {
            setPromotionPawn(cell.figure)
         }
         setSelectedCell(null);
      } else if (figure) {
         setSelectedCell(cell);
      } else {
         setSelectedCell(null)
      }
   }

   const className = [
      s.cell,
      color === Colors.BLACK ? s.black : s.white,
      cell.x === selectedCell?.x && cell.y === selectedCell?.y ? s.selected : '',
      cell.available && !figure ? s.availableToMove : '',
      cell.available && figure ? s.availableToAttack : '',
   ].join(' ');

   return (
      <React.Fragment>
         <div onClick={handleClick} className={className}>
            {figure?.logo && (
               <div className={s.figureCell}>
                  <img src={figure.logo} alt={figure.name} />
               </div>
            )}
         </div>
      </React.Fragment>
   );
};

export default CellComponent;