import { Piece, PieceColor } from "./Piece";

export enum SpotColor {
  White,
  Black,
}

export class Spot {
  piece?: Piece;
  x: number;
  y: number;
  color: SpotColor;

  constructor(x: number, y: number, piece?: Piece) {
    this.x = x;
    this.y = y;
    this.piece = piece;
    this.color = this.getSpotColor();
  }

  getSpotColor() {
    if (this.x % 2) {
      if (this.y % 2) {
        return SpotColor.White;
      }
      return SpotColor.Black;
    }

    if (this.y % 2) {
      return SpotColor.Black;
    }
    return SpotColor.White;
  }
}
