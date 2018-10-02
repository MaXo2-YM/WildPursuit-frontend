import React, { Component } from "react";
import XButton from "./../../commun/button/XButton.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { closePopup } from "../countDown/countdown.actions";

class Popup extends Component {
  constructor(props) {
    super();
    this.state = { ...props };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.dispatch({
      type: "@popup/CLOSE"
    });
  }

  render() {
    if (this.props.isFinished) {
      this.props.dispatch(closePopup());
    }
    return (
      <Modal
        open={this.props.isOpen}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%"
        }}
      >
        <Paper
          elevation="20"
          style={{
            width: "70%",
            height: "70%",
            position: "relative"
          }}
        >
          <Link to="/">
            <XButton
              onClick={() => {
                this.handleClose();
              }}
              name="X"
            />
          </Link>

          {this.props.content}
        </Paper>
      </Modal>
    );
  }
}

function mapStateToProps({ Popup, CountDown }) {
  return {
    isOpen: Popup.isOpen,
    content: Popup.content,
    isFinished: CountDown.isFinished
  };
}

export default connect(mapStateToProps)(Popup);
