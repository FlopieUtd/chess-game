import React from "react";
import "./App.css";
import { Board } from "./classes/Board";
import { SpotColor } from "./classes/Spot";

function App() {
  const board = new Board();
  board.resetBoard();

  console.log(board);
  return (
    <div className="App">
      {board.boxes.map(row => (
        <div className="row">
          {row.map(box => (
            <div
              className="box"
              style={{
                background: box.color === SpotColor.Black ? "black" : "white"
              }}
            >
              {box.piece && <div>piece</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
