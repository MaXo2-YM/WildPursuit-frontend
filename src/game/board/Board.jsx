import React, { Component } from "react";

import NormalBox from "./boxes/normalBox/NormalBox.jsx";
import CheeseBox from "./boxes/cheeseBox/CheeseBox.jsx";
import ReplayBox from "./boxes/replayBox/ReplayBox.jsx";
import CenterBox from "./boxes/centerBox/CenterBox.jsx";
import Pawn from "./pawn/Pawn.jsx";
import "./board.css";

const WIDTH = 800; // constante de la longueur de zone de jeu en pixels
const HEIGHT = 800; // constante de la hauteur de zone de jeu en pixels

const zeBoard = [
  { _id: 0, _size: 50, _coord: [130, 50] },
  {
    _id: 1,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 2, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 3, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 4, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 5, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  { _id: 6, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 7, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 8, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 9, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  {
    _id: 10,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 11, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 12, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 13, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 14, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  { _id: 15, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 16, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  {
    _id: 17,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 18, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 19, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 20, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  {
    _id: 21,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 22, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 23, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 24, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  { _id: 25, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  {
    _id: 26,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 27, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 28, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 29, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 30, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 31, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 32, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 33, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 34, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  { _id: 35, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  {
    _id: 36,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 37, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  { _id: 38, _size: 50, _coord: [130, 50] },
  { _id: 39, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  {
    _id: 40,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 41, _size: 50, _coord: [130, 50] },
  { _id: 42, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 43, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 44, _size: 50, _coord: [130, 50] },
  { _id: 45, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  { _id: 46, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 47, _size: 50, _coord: [130, 50] },
  {
    _id: 48,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  {
    _id: 49,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 50, _size: 50, _coord: [130, 50] },
  { _id: 51, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 52, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 53, _size: 50, _coord: [130, 50] },
  { _id: 54, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 55, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 56, _size: 50, _coord: [130, 50] },
  {
    _id: 57,
    _size: 50,
    _coord: [130, 50],
    _theme: { name: "Science & Nature" }
  },
  { _id: 58, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 59, _size: 50, _coord: [130, 50] },
  { _id: 60, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 61, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 62, _size: 50, _coord: [130, 50] },
  { _id: 63, _size: 50, _coord: [130, 50], _theme: { name: "People" } },
  { _id: 64, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } },
  { _id: 65, _size: 50, _coord: [130, 50] },
  { _id: 66, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 67, _size: 50, _coord: [130, 50], _theme: { name: "Animaux" } },
  { _id: 68, _size: 50, _coord: [130, 50] },
  { _id: 69, _size: 50, _coord: [130, 50], _theme: { name: "Musique" } },
  { _id: 70, _size: 50, _coord: [130, 50], _theme: { name: "Théatre" } },
  { _id: 71, _size: 50, _coord: [130, 50] },
  { _id: 72, _size: 50, _coord: [130, 50], _theme: { name: "Jeux Vidéos" } }
];

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
