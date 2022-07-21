import React from 'react';
import { Colors, FigureNames, FigureLogos, PromotionFigures } from '../../models';
import { Pawn } from '../../models/figures';
import s from './PromotionForm.module.scss';


type PropsType = {
   promoteFigure: (pawn: Pawn, figure: PromotionFigures) => () => void
   pawn: Pawn
};

const PromotionForm: React.FC<PropsType> = ({ promoteFigure, pawn }) => {
   return (
      <div className={s.window}>
         <div className={s.form}>
            <Figure onClick={promoteFigure(pawn, FigureNames.QUEEN)} name={FigureNames.QUEEN} color={pawn.color} />
            <Figure onClick={promoteFigure(pawn, FigureNames.ROOK)} name={FigureNames.ROOK} color={pawn.color} />
            <Figure onClick={promoteFigure(pawn, FigureNames.KNIGHT)} name={FigureNames.KNIGHT} color={pawn.color} />
            <Figure onClick={promoteFigure(pawn, FigureNames.BISHOP)} name={FigureNames.BISHOP} color={pawn.color} />
         </div>
      </div>
   );
};

type FigureProps = {
   name: FigureNames
   color: Colors
   onClick: () => void
}
const Figure: React.FC<FigureProps> = ({ name, color, onClick }) => {
   return (
      <div onClick={onClick} className={[s.figure, 'ibg'].join(' ')}>
         <img src={FigureLogos[name][color]} alt={name} />
      </div>
   );
}

export default PromotionForm;