export enum PieceColor {
  White,
  Black
}

export class Piece {
  killed: boolean = false;
  color: PieceColor;

  constructor (pieceColor: PieceColor) {
    this.color = pieceColor;
  }

  getColor () {
    return this.color;
  }

  setColor (pieceColor: PieceColor) {
    this.color = pieceColor;
  }

  getKilled () {
    return this.killed;
  }

  setKilled (isKilled: boolean) {
    this.killed = isKilled;
  }
}