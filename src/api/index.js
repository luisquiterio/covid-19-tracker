import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getGlobalSummary = async () => {
	try {
		const { data } = await axios.get(url);
		const obj = {
			name: 'Global',
			confirmed: data.confirmed,
			recovered: data.recovered,
			deaths: data.deaths,
			lastUpdate: data.lastUpdate,
		};
		return obj;
	} catch (error) {
		console.log(`error fetching ${url}`, error);
	}
};

export const getCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);
		return countries;
	} catch (error) {
		console.log(`error fetching ${url}/countries`, error);
	}
};

export const getCountrySummary = async name => {
	try {
		const { data } = await axios.get(`${url}/countries/${name}`);
		const obj = {
			name: name,
			confirmed: data.confirmed,
			recovered: data.recovered,
			deaths: data.deaths,
			lastUpdate: data.lastUpdate,
		};
		return obj;
	} catch (error) {
		console.log(`error fetching ${url}/countries/${name}`, error);
	}
};
