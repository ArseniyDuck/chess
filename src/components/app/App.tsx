import React from 'react';
import Board from '../board/Board';
import s from './App.module.scss';

type PropsType = {};

const App: React.FC<PropsType> = (props) => {
   return (
      <div className={s.app}>
         <Board />
      </div>
   );
};

export default App;