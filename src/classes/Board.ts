import { PieceColor } from "./Piece";
import { Rook } from "./Rook";
import { Spot } from "./Spot";

export const BOARD_LENGTH = 8;

export class Board {
  boxes: Spot[][] = [[], [], [], [], [], [], [], []];

  constructor() {
    this.resetBoard();
  }

  getBox(x: number, y: number) {
    return this.boxes[x][y];
  }

  resetBoard() {
    this.boxes[0][0] = new Spot(0, 0, new Rook(PieceColor.White));
    this.boxes[0][1] = new Spot(0, 1, new Rook(PieceColor.White));
    this.boxes[0][2] = new Spot(0, 2, new Rook(PieceColor.White));
    this.boxes[0][3] = new Spot(0, 3, new Rook(PieceColor.White));
    this.boxes[0][4] = new Spot(0, 4, new Rook(PieceColor.White));
    this.boxes[0][5] = new Spot(0, 5, new Rook(PieceColor.White));
    this.boxes[0][6] = new Spot(0, 6, new Rook(PieceColor.White));
    this.boxes[0][7] = new Spot(0, 7, new Rook(PieceColor.White));
    this.boxes[1][0] = new Spot(1, 0, new Rook(PieceColor.White));
    this.boxes[1][1] = new Spot(1, 1, new Rook(PieceColor.White));
    this.boxes[1][2] = new Spot(1, 2, new Rook(PieceColor.White));
    this.boxes[1][3] = new Spot(1, 3, new Rook(PieceColor.White));
    this.boxes[1][4] = new Spot(1, 4, new Rook(PieceColor.White));
    this.boxes[1][5] = new Spot(1, 5, new Rook(PieceColor.White));
    this.boxes[1][6] = new Spot(1, 6, new Rook(PieceColor.White));
    this.boxes[1][7] = new Spot(1, 7, new Rook(PieceColor.White));

    for (let y = 2; y < 6; y++) {
      for (let x = 0; x < BOARD_LENGTH; x++) {
        this.boxes[y][x] = new Spot(y, x);
      }
    }

    this.boxes[6][0] = new Spot(0, 0, new Rook(PieceColor.Black));
    this.boxes[6][1] = new Spot(0, 1, new Rook(PieceColor.Black));
    this.boxes[6][2] = new Spot(0, 2, new Rook(PieceColor.Black));
    this.boxes[6][3] = new Spot(0, 3, new Rook(PieceColor.Black));
    this.boxes[6][4] = new Spot(0, 4, new Rook(PieceColor.Black));
    this.boxes[6][5] = new Spot(0, 5, new Rook(PieceColor.Black));
    this.boxes[6][6] = new Spot(0, 6, new Rook(PieceColor.Black));
    this.boxes[6][7] = new Spot(0, 7, new Rook(PieceColor.Black));
    this.boxes[7][0] = new Spot(1, 0, new Rook(PieceColor.Black));
    this.boxes[7][1] = new Spot(1, 1, new Rook(PieceColor.Black));
    this.boxes[7][2] = new Spot(1, 2, new Rook(PieceColor.Black));
    this.boxes[7][3] = new Spot(1, 3, new Rook(PieceColor.Black));
    this.boxes[7][4] = new Spot(1, 4, new Rook(PieceColor.Black));
    this.boxes[7][5] = new Spot(1, 5, new Rook(PieceColor.Black));
    this.boxes[7][6] = new Spot(1, 6, new Rook(PieceColor.Black));
    this.boxes[7][7] = new Spot(1, 7, new Rook(PieceColor.Black));
  }
}
