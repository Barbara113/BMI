import React, { Component } from "react";
import "./style/landingScreen.scss";

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMale: false,
      isFemale: false,
    };
  }
  onClickMale = () => {
    this.setState({
      isMale: !this.state.isMale,
      isFemale: false,
    });
  };
  onClickFemale = () => {
    this.setState({
      isFemale: !this.state.isFemale,
      isMale: false,
    });
  };
  render() {
    const { isMale, isFemale } = this.state;
    return (
      <div className="landingWrapper">
        <header>
          <h1>BMI calculator</h1>
        </header>
        <main>
          <div className="inputsWrapper">
            <div className="chooseGender">
              <div className="male" onClick={this.onClickMale}>
                <div className="maleSymbol">&#x2642;</div>
                <p className="paragraphMale">Male</p>
              </div>
              <div className="female" onClick={this.onClickFemale}>
                <div className="femaleSymbol">&#9792;</div>
                <p className="paragraphFemale">Female</p>
              </div>
            </div>
            <div className="chooseHeight">
              <label for="inputHeight">Height</label> <br />
              <input
                id="inputHeight"
                type="number"
                className={
                  isMale
                    ? "inputClass inputMale"
                    : isFemale
                    ? "inputClass inputFemale"
                    : "inputClass"
                }
              ></input>
            </div>
            <div className="chooseWeight">
              <label for="inputWeight">Weight</label> <br />
              <input
                id="inputWeight"
                type="number"
                className={
                  isMale
                    ? "inputClass inputMale"
                    : isFemale
                    ? "inputClass inputFemale"
                    : "inputClass"
                }
              ></input>
            </div>
            <div className="chooseAge">
              <label for="inputAge">Age</label> <br />
              <input
                id="inputAge"
                type="number"
                className={
                  isMale
                    ? "inputClass inputMale"
                    : isFemale
                    ? "inputClass inputFemale"
                    : "inputClass"
                }
              ></input>
            </div>
          </div>
        </main>
        <footer>section footer</footer>
      </div>
    );
  }
}
