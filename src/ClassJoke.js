import React from 'react';
import './Joke.css';

class ClassJoke extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vote: 0
		};
		this.decrement = this.decrement.bind(this);
		this.increment = this.increment.bind(this);
	}

	decrement = () => {
		this.setState({ vote: this.props.vote(this.props.id, -1) });
	};

	increment = () => {
		this.setState({ vote: this.props.vote(this.props.id, +1) });
	};

	render() {
		return (
			<div className="Joke">
				<div className="Joke-votearea">
					<button onClick={this.increment}>
						<i className="fas fa-thumbs-up" />
					</button>

					<button onClick={this.decrement}>
						<i className="fas fa-thumbs-down" />
					</button>

					{this.props.votes}
				</div>

				<div className="Joke-text">{this.props.text}</div>
			</div>
		);
	}
}

export default ClassJoke;
