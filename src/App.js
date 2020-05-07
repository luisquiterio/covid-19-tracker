import React from 'react';
import { hot } from 'react-hot-loader';
import { getGlobalSummary, getCountries, getCountrySummary } from './api';
import Cards from './components/Cards/Cards';
import Selector from './components/Selector/Selector';
import Map from './components/Map/Map';
import './App.css';

class App extends React.Component {
	state = {
		globalData: [],
		countryData: [],
		countryNames: [],
		dataLoaded: false,
		country: 'US',
	};

	async componentDidMount() {
		const globalData = await getGlobalSummary();
		this.setState({ globalData: [globalData] });

		const countries = await getCountries();
		const countryNames = countries.map(c => c.name);
		this.setState({ countryNames });

		// can we lazy load this information?
		for (const name of countryNames) {
			const data = await getCountrySummary(name);
			if (data) {
				this.setState({
					countryData: [...this.state.countryData, data],
				});
			}
		}
		this.setState({ dataLoaded: true });
	}

	handleCountryChange = country => {
		this.setState({ country: country });
	};

	render() {
		const {
			globalData,
			countryData,
			countryNames,
			dataLoaded,
			country,
		} = this.state;

		return (
			<div className="App">
				<div className="container">
					<h1>Global Summary</h1>
					<Cards
						data={globalData}
						dataLoaded={dataLoaded}
						value="Global"
					></Cards>
					<h1>Country Summary</h1>
					<Selector
						data={countryNames}
						value={country}
						handleCountryChange={this.handleCountryChange}
					></Selector>
					<Cards
						data={countryData}
						dataLoaded={dataLoaded}
						value={country}
					></Cards>
					<h1>Map</h1>
					<Map></Map>
				</div>
			</div>
		);
	}
}

export default hot(module)(App);
