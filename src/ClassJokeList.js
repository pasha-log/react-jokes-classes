import React from 'react';
import axios from 'axios';
import ClassJoke from './ClassJoke';
import './JokeList.css';

class ClassJokeList extends React.Component {
	constructor() {
		super();
		this.state = {
			jokes: []
		};
		this.vote = this.vote.bind(this);
		// this.getJokes = this.getJokes.bind(this);
	}

	/* function for getting jokes */

	getJokes = async () => {
		let j = [];
		let seenJokes = new Set();
		try {
			while (j.length < 10) {
				await axios
					.get('https://icanhazdadjoke.com', {
						headers: { Accept: 'application/json' }
					})
					.then((res) => {
						let jokeObj = res.data;

						if (!seenJokes.has(jokeObj.id)) {
							seenJokes.add(jokeObj.id);
							j.push({ ...jokeObj, votes: 0 });
						} else {
							console.error('duplicate found!');
						}
					});
			}
			this.setState({ jokes: j });
		} catch (e) {
			console.log(e);
		}
		console.log(this.state.jokes);
	};

	/* change vote for this id by delta (+1 or -1) */

	vote = (id, delta) => {
		this.setState({ jokes: this.state.jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j)) });
	};

	/* get jokes if there are no jokes */

	componentDidMount() {
		this.getJokes();
	}

	componentDidUpdate() {
		if (this.state.jokes.length === 0) {
			this.getJokes();
		}
	}

	/* render: list of sorted jokes. */

	render() {
		return (
			<div className="Jokes">
				<h1 className="Title">🤣CheeZJokes</h1>
				<div className="JokeList">
					<button className="JokeList-getmore" onClick={() => this.setState({ jokes: [] })}>
						Get New Jokes
					</button>

					{[ ...this.state.jokes ]
						.sort((a, b) => b.votes - a.votes)
						.map((j) => <ClassJoke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={this.vote} />)}
				</div>
			</div>
		);
	}
}

export default ClassJokeList;
