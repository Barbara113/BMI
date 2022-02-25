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
      isNormal: false,
      isOverweight: false,
      isUnderweight: false,
      unvalid: false,
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
    let {
      isUnderweight,
      isNormal,
      isOverweight,
      height,
      weight,
      age,
      result,
      isFemale,
      isMale,
      unvalid,
    } = this.state;
    result = weight / Math.pow(height, 2);

    if (result < 18.5) {
      this.setState({ isUnderweight: true });
    } else if (result > 24.9) {
      this.setState({ isOverweight: true });
    } else if (result > 18.5 && result < 24.9) {
      this.setState({ isNormal: true });
    }
    if (height !== "" && weight !== "" && age !== "" && (isFemale || isMale)) {
      this.setState({ unvalid: false });
      this.setState({ result: result });
    } else {
      this.setState({ unvalid: true });
    }
  };
  render() {
    const {
      isMale,
      isFemale,
      result,
      unvalid,
      isOverweight,
      isUnderweight,
      isNormal,
    } = this.state;
    return (
      <div className="landingWrapper">
        {unvalid ? alert("Please fill in all fields") : null}
        {isUnderweight || isOverweight || isNormal ? (
          <div className="messagewrapper">
            <div className="contentWrapper">
              {isUnderweight && (
                <div className="message">
                  You are underweight.
                  <br /> Your bmi is: {Math.round(result)}
                </div>
              )}
              {isOverweight && (
                <div className="message">
                  You are overweight. <br /> Your bmi is: {Math.round(result)}
                </div>
              )}
              {isNormal && (
                <div className="message">
                  Your weight is normal. <br /> Your bmi is:{" "}
                  {Math.round(result)}
                </div>
              )}{" "}
            </div>
          </div>
        ) : null}
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
              <label htmlFor="inputHeight">Height (m)</label> <br />
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
              <label htmlFor="inputWeight">Weight (kg)</label> <br />
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
              <label htmlFor="inputAge">Age</label> <br />
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
                value={result == "" || result == NaN ? "" : Math.round(result)}
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
