import { Colors } from '../types';
import { Figure } from './figures/Figure';

export class Cell {
   readonly x: number;
   readonly y: number;
   readonly color: Colors;
   figure: Figure | null;
   available: boolean

   constructor (x: number, y: number, color: Colors, figure: Figure | null) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.figure = figure;
      this.available = false;
   }
}