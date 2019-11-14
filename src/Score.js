import React from "react";

const Score = ({ numCorrect, numQuestions }) => {
	return (
		<div>
			<p className='text'>
				Your Score: {numCorrect}/{numQuestions}
			</p>
		</div>
	);
};

export default Score;
