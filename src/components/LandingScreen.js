import React, { Component } from "react";
import "./style/landingScreen.scss";

export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMale: false,
      isFemale: false,
      male: "",
      female: "",
      height: "",
      weight: "",
      age: "",
      result: "",
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
  onClickCalculate = () => {
    let { male, female, height, weight, age, result } = this.state;
    result = weight / Math.pow(height, 2);
    this.setState({ result: result });
  };
  render() {
    const { isMale, isFemale, result } = this.state;
    return (
      <div className="landingWrapper">
        <header>
          <h1>BMI calculator</h1>
        </header>
        <main>
          <div className="inputsWrapper">
            <div className="chooseGender">
              <div
                className={isMale ? "male maleActive" : "male"}
                onClick={this.onClickMale}
              >
                <div className="maleSymbol">&#x2642;</div>
                <p className="paragraphMale">Male</p>
              </div>
              <div
                className={isFemale ? "female femaleActive" : "female"}
                onClick={this.onClickFemale}
              >
                <div className="femaleSymbol">&#9792;</div>
                <p className="paragraphFemale">Female</p>
              </div>
            </div>
          </div>
          <div className="inputWrapp">
            <div className="chooseHeight">
              <label for="inputHeight">Height (m)</label> <br />
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
                onChange={(e) => {
                  this.setState({ height: e.target.value });
                }}
              ></input>
            </div>

            <div className="chooseWeight">
              <label for="inputWeight">Weight (kg)</label> <br />
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
                onChange={(e) => {
                  this.setState({ weight: e.target.value });
                }}
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
                onChange={(e) => {
                  this.setState({ age: e.target.value });
                }}
              ></input>
            </div>
          </div>
        </main>
        <footer>
          <div className="buttonWrapper">
            <div>
              Your bmi is:
              <input
                className="inputResult"
                value={Math.round(result)}
                readOnly
              />
            </div>
            <button className="buttonCalculate" onClick={this.onClickCalculate}>
              Calculate
            </button>
          </div>
        </footer>
      </div>
    );
  }
}
