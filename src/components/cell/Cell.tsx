import React from 'react';
import { Cell, Colors } from '../../types';
import s from './Cell.module.scss';

type PropsType = Cell;

const CellComponent: React.FC<PropsType> = ({ color, figure }) => {
   return (
      <div className={color == Colors.BLACK ? `${s.cell} ${s.dark}` : `${s.cell} ${s.light}`}>
         {figure && (
            <div className={s.figureCell}>
               <img src={figure.logo} />
            </div>
         )}
      </div>
   );
};

export default CellComponent;