import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { initCells, initFigures } from '../../redux/board-slice';
import Cell from '../cell/Cell';
import s from './Board.module.scss';

type PropsType = {};

const Board: React.FC<PropsType> = (props) => {
   const dispatch = useAppDispatch();
   const cells = useAppSelector(state => state.board.cells);
   const isInit = useAppSelector(state => state.board.isInit);

   useEffect(() => {
      if (!isInit) {
         dispatch(initCells());
         dispatch(initFigures());
      }
   }, [isInit]);

   return (
      <div className={s.board}>
         {cells.map(row => row.map((cell, index) => (
            <Cell cell={cell} key={index} />
         )))}
      </div>
   );
};

export default Board;