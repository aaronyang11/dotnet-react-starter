import React from "react";
import attack from "../images/attack.png";
import defend from "../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefense = this.handleDefense.bind(this);
    this.handleRandomPlay = this.handleRandomPlay.bind(this);
    this.state = {
      count: 0,
    };
  }
  handleAttack() {
    // alert("Attack clicked");

    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return { count: newCount };
    });
  }

  handleDefense() {
    // alert("Defend clicked");
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return { count: newCount };
    });
  }

  handleReset = () => {
    this.setState(() => {
      return { count: 0 };
    });
  };

  handleRandomPlay() {
    // alert("Defend clicked");
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefense();
    }
  }
  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score:{this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points</p>
        <p>Last Play: </p>
        <h3>Game Status: </h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attack}
            onClick={this.handleAttack}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "10px solid green",
            }}
            className="p-4 rounded"
            alt="Attack"
          ></img>
        </div>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={defend}
            onClick={this.handleDefense}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "10px solid red",
            }}
            className="p-4 rounded"
            alt="Defend"
          ></img>
        </div>

        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
