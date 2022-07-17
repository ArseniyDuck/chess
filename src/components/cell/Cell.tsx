import React from 'react';
import { Colors } from '../../types';
import { Cell } from '../../models/Cell'
import s from './Cell.module.scss';

type PropsType = {
   cell: Cell
};

const CellComponent: React.FC<PropsType> = ({ cell: { color, figure } }) => {
   return (
      <div className={color == Colors.BLACK ? `${s.cell} ${s.dark}` : `${s.cell} ${s.light}`}>
         {figure?.logo && (
            <div className={s.figureCell}>
               <img src={figure.logo} />
            </div>
         )}
      </div>
   );
};

export default CellComponent;