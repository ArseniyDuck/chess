import React, { useEffect, useState } from 'react';
import s from './App.module.scss';
import { Board } from '../../models/Board';
import BoardComponent from '../board/Board';

type PropsType = {};

const App: React.FC<PropsType> = (props) => {
   const [board, setBoard] = useState<Board>(new Board());

   const restart = () => {
      const newBoard = new Board();
      newBoard.initCells();
      newBoard.initFigures();
      setBoard(newBoard)
   };

   useEffect(() => {
      restart();
   }, []);

   return (
      <div className={s.app}>
         <BoardComponent board={board} setBoard={setBoard} />
      </div>
   );
};

export default App;