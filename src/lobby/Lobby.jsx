import React, { Component } from "react";
import { connect } from "react-redux";
import FlatButton from "./../commun/button/FlatButton";
import List from "./../commun/list/List.jsx";
import { Link } from "react-router-dom";

import { generateDummyGames } from "./../App.dummyDatas.js";
import "./lobby.css";

import CreateGame from "../game/popup/createGame/CreateGame.jsx";

class Lobby extends Component {
  constructor() {
    super();
    this.rejoindre = generateDummyGames(6);

    this.rejoindre.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });

    this.rejoindre.map((partie, i) => {
      let name =
        "Partie #" +
        partie.id +
        " - " +
        partie.connectedPlayers +
        "/" +
        partie.maxPlayers;
      let path = "/game/" + partie.id;

      return (this.rejoindre[i] = (
        <Link to={path}>
          <FlatButton
            onClick={() => {
              this.joinGame(partie.id);
            }}
            name={name}
          />
        </Link>
      ));
    });

    if (this.rejoindre.length === 0) {
      this.rejoindre = ["Pas de partie en cours"];
    }

    this.rejoindre.push(
      <Link to="/game/">
        <FlatButton
          marginTop="4%"
          onClick={() => {
            this.createGame();
          }}
          name="Créer une partie"
        />
      </Link>
    );

    this.joinGame = this.joinGame.bind(this);
    this.createGame = this.createGame.bind(this);
  }

  joinGame(id) {}

  createGame() {
    this.props.dispatch({
      type: "@popup/OPEN",
      payload: { content: <CreateGame /> }
    });
  }

  render() {
    return (
      <div id="fondEcran">
        <div>
          <img
            id="logo"
            src={require("./../commun/images/logoWP.png")}
            alt="Logo Wild Pursuit"
          />
          <h3 id="typo"> Crée ou rejoins une équipe de wildeurs ! </h3>
          <br />
          <List
            items={this.rejoindre}
            itemStyle={{
              margin: "1%"
            }}
          />
        </div>
      </div>
    );
  }
}

//export default Lobby;
export default connect(() => ({}))(Lobby);
