import React, { Fragment } from 'react';
import SayHello from './components/SayHello';
import SayHelloClass from './components/SayHelloClass';
import Todo from './components/Todo';

// This is a functional component
const App: React.FC = () => {
	return (
		<Fragment>
			<Todo />

			<hr />

			<SayHello
				name="Lester Howard"
				age={20}
				email="lesthoward@gmail.com"
			/>

			<hr />

			<SayHelloClass name="Unknown" age={20} email="unknown@gmail.com" />
		</Fragment>
	);
};

export default App;

// class-based React Component
// class App extends React.Component {
// 	render() {
// 		return (
// 			<Fragment>
// 				<h1>React</h1>
// 				<h2>Class Numer #2</h2>
// 			</Fragment>
// 		)
// 	}
// }
