import React from 'react';
import { hot } from 'react-hot-loader';
import { getGlobalSummary, getCountries, getCountrySummary } from './api';
import Cards from './components/Cards/Cards';
import Map from './components/Map/Map';
import './App.css';

class App extends React.Component {
	state = {
		globalSummaryData: [],
		countrySummaryData: [],
		dataLoaded: false,
		currentCountry: 'US',
	};

	async componentDidMount() {
		const globalSummary = await getGlobalSummary();
		this.setState({
			globalSummaryData: [...this.state.globalSummaryData, globalSummary],
		});

		const countries = await getCountries();

		let index = 0;
		for (const c of countries) {
			const countrySummary = await getCountrySummary(c.name);
			if (countrySummary !== undefined) {
				this.setState({
					countrySummaryData: [
						...this.state.countrySummaryData,
						countrySummary,
					],
				});
			}
			if (index === countries.length - 1) {
				this.setState({ dataLoaded: true });
			}
			index++;
		}
	}

	render() {
		const {
			globalSummaryData,
			countrySummaryData,
			dataLoaded,
			currentCountry,
		} = this.state;

		return (
			<div className="App">
				<div className="container">
					<h1>Global Summary</h1>
					<div className="card-section">
						<Cards
							data={globalSummaryData}
							dataLoaded={dataLoaded}
							countryId="Global"
						></Cards>
					</div>
					<div className="card-section">
						<h1>Country Summary</h1>
						<Cards
							data={countrySummaryData}
							dataLoaded={dataLoaded}
							countryId={currentCountry}
						></Cards>
					</div>
					<h1>Map</h1>
					<div className="map-section">
						<Map></Map>
					</div>
				</div>
			</div>
		);
	}
}

export default hot(module)(App);
