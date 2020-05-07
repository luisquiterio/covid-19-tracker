import React from 'react';
import { hot } from 'react-hot-loader';
import { getGlobalData, getCountryData } from './api';
import Cards from './components/Cards/Cards';
import Selector from './components/Selector/Selector';
import Map from './components/Map/Map';
import './App.css';

class App extends React.Component {
	state = {
		globalData: {},
		countryData: [],
		countryNames: [],
		dataLoaded: false,
		currentCountry: 'USA',
	};

	async componentDidMount() {
		const globalData = await getGlobalData();
		this.setState({ globalData });

		const countryData = await getCountryData();
		this.setState({ countryData });

		const countryNames = countryData.map(c => c.name);
		this.setState({ countryNames });

		this.setState({ dataLoaded: true });
	}

	handleCountryChange = country => {
		this.setState({ currentCountry: country });
	};

	render() {
		const {
			globalData,
			countryData,
			countryNames,
			dataLoaded,
			currentCountry,
		} = this.state;

		return (
			<div className="App">
				<div className="container">
					<h1>Global Summary</h1>
					<Cards data={globalData} dataLoaded={dataLoaded}></Cards>
					<h1>Country Summary</h1>
					<Selector
						data={countryNames}
						value={currentCountry}
						handleCountryChange={this.handleCountryChange}
					></Selector>
					<Cards
						data={countryData.find(c => c.name === currentCountry)}
						dataLoaded={dataLoaded}
					></Cards>
					<h1>Map</h1>
					<Map data={countryData} dataLoaded={dataLoaded}></Map>
				</div>
			</div>
		);
	}
}

export default hot(module)(App);
