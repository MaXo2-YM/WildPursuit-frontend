import React, { Component } from "react";

import NormalBox from "./boxes/normalBox/NormalBox.jsx";
import CheeseBox from "./boxes/cheeseBox/CheeseBox.jsx";
import ReplayBox from "./boxes/replayBox/ReplayBox.jsx";
import CenterBox from "./boxes/centerBox/CenterBox.jsx";
import Pawn from "./pawn/Pawn.jsx";
import "./board.css";

const WIDTH = 800; // constante de la longueur de zone de jeu en pixels
const HEIGHT = 800; // constante de la hauteur de zone de jeu en pixels

export default class Board extends Component {
  render() {
    return (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          position: "relative",
          border: "1px solid black",
          overflow: "auto"
        }}
      >
        <Pawn />
        <NormalBox
          objet={{
            id: 27,
            coord: [78, 67],
            categorie: {
              nom: "Géographie",
              couleur: { nom: "Rouge", code: "#FF0000" }
            },
            size: 50
          }}
        />
        <CheeseBox
          cheeseObjet={{
            id: 34,
            coord: [78, 127],
            categorie: {
              nom: "Histoire",
              couleur: { nom: "Noir", code: "#FFFFFF" }
            },
            size: 50
          }}
        />
        <ReplayBox
          replayObjet={{
            id: 22,
            coord: [78, 187],
            categorie: {
              nom: "Loisir",
              couleur: { nom: "Rose", code: "#FFFFFF" }
            },
            size: 50
          }}
        />
        <CenterBox
          centerObjet={{
            id: 82,
            coord: [78, 257],
            categorie: {
              nom: "Loisir",
              couleur: { nom: "Bleu", code: "#FFFFFF" }
            },
            size: 50
          }}
        />
      </div>
    );
  }
}

// TODO :
//board math.pi en plus propre
// cf. board.jsx du wildpursuit
