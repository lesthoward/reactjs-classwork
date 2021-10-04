import React, { Fragment } from 'react';

interface SayHi {
	name: string;
	age: number;
	address?: string;
	email: string;
}

interface SayHiState {
	counter: number;
}

class SayHelloClass extends React.Component<SayHi, SayHiState> {
	state: SayHiState = {
		counter: 0,
	};

	sumMore() {
		this.setState((previosState) => ({
			counter: previosState.counter + 1,
		}));
	}

    increment(count: number) {
        this.setState(prev => ({
            counter: prev.counter + count
        }))
    }

	render() {
		const { name, age, address, email } = this.props;
		const { counter } = this.state;

		return (
			<Fragment>
				<ul>
					<li>Name: {name}</li>
					<li>Age: {age}</li>
					<li>Address: {address}</li>
					<li>Email: {email}</li>
				</ul>
				<p>Count: {counter}</p>
                <button onClick={ () => this.increment(-1) }>
                Decrement -</button>
				<button onClick={ () => this.increment(1) }>
                Increment +</button>
			</Fragment>
		);
	}
}

export default SayHelloClass;
