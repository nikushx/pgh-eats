import React from 'react';
import './App.css';
import useGlobal from './factory/store';
import CurrentPlaces from './CurrentPlaces';

function App() {
	const [store, actions] = useGlobal();

	return (
		<div className="PGHEats">
			<h1>PGH Eats (Working Title)</h1>
			<h4>get some grub, right the fuck now.</h4>
			<button onClick={() => actions.setDate({hour:0})}>Do something</button>
			<CurrentPlaces />
		</div>
	);
}

export default App;
