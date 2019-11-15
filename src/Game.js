import React, { Component } from "react";

/*
Handles the Game 
1. user should be able to answer whether it is true that the sum of X, Y, and Z
equals the proposed answer P
2. Handle the answer 
3. Generating new questions each play 
*/

class Game extends Component {
	// initialized everytime the program loads
	constructor(props) {
		super(props);
		const newValuesArray = this.makeNewQuestion();

		this.state = {
			value1: newValuesArray[0],
			value2: newValuesArray[1],
			value3: newValuesArray[2],
			proposedAnswer: newValuesArray[3]
		};
		console.log(newValuesArray);
	}

	// generate random numbers for equation
	makeNewQuestion = () => {
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer =
			Math.floor(Math.random() * 3) + (value1 + value2 + value3);
		return [ value1, value2, value3, proposedAnswer ];
	};

	// update the state with new random numbers in the newValuesArray
	updateState = (newValuesArray) => {
		this.setState((currentState) => ({
			value1: newValuesArray[0],
			value2: newValuesArray[1],
			value3: newValuesArray[2],
			proposedAnswer: newValuesArray[3]
		}));
	};

	// handle button press
	handleAnswer = (e) => {
		// generate new numbers and stick into array - random numbers won't change unless you manually change the array
		const newValuesArray = this.makeNewQuestion();
		// update state with numbers from newValuesArray
		this.updateState(newValuesArray);
		// evaluate the chosen button that was pressed by using the name of button
		const answerWasCorrect = this.evaluateAnswer(e.target.name);
		// pass the answer to App.js to update score state
		this.props.handleAnswer(answerWasCorrect);
	};

	evaluateAnswer = (givenAnswer) => {
		const { value1, value2, value3, proposedAnswer } = this.state;
		console.log(this.state);
		const correctAnswer = value1 + value2 + value3;

		// return boolean of whether the answer is correct - if the answers match and the button that was pressed is correct
		return (
			(correctAnswer === proposedAnswer && givenAnswer === "true") ||
			(correctAnswer !== proposedAnswer && givenAnswer === "false")
		);
	};

	render() {
		const { value1, value2, value3, proposedAnswer } = this.state;
		return (
			// without this '(', JS will automatically put a ';' after 'return.'
			<div>
				<div className='equation'>
					<p className='text'>{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
				</div>
				<button onClick={this.handleAnswer} name='true'>
					True
				</button>
				<button name='false' onClick={this.handleAnswer}>
					False
				</button>
			</div>
		);
	}
}

export default Game;
