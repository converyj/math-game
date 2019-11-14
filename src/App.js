import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import Score from "./Score";

class App extends Component {
	state = {
		numQuestions: 0,
		numCorrect: 0
	};

	// handle answer
	handleAnswer = () => {
		// update correct answers if correct
		if (this.props.answerWasCorrect) {
			this.setState((currState) => ({
				numCorrect: currState.numCorrect + 1
			}));
		}
		// in both cases, update the questions answered
		this.setState((currState) => ({
			numQuestions: currState.numQuestions + 1
		}));
	};

	render() {
		return (
			<React.Fragment>
				<Game handleAnswer={this.handleAnswer} />
				<Score
					numCorrect={this.state.numCorrect}
					numQuestions={this.state.numQuestions}
				/>
			</React.Fragment>
		);
	}
}

export default App;
