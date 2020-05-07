import axios from 'axios';

export const getGlobalData = async () => {
	try {
		const response = await axios.get('https://covid19.mathdro.id/api');
		const processed = processGlobalData(response.data);
		return processed;
	} catch (error) {
		console.log(`error fetching https://covid19.mathdro.id/api`, error);
	}
};

export const getCountryData = async () => {
	try {
		const response = await axios.get('https://corona-api.com/countries');
		const processed = processCountryData(response.data.data);
		return processed;
	} catch (error) {
		console.log(`error fetching https://corona-api.com/countries`, error);
	}
};

const processGlobalData = data => {
	const output = {
		name: 'Global',
		confirmed: data.confirmed.value,
		recovered: data.recovered.value,
		deaths: data.deaths.value,
		lastUpdate: data.lastUpdate,
	};
	return output;
};

const processCountryData = data => {
	let output = [];
	for (const d of data) {
		const obj = {
			name: d.name,
			latitude: d.coordinates.latitude,
			longitude: d.coordinates.longitude,
			confirmed: d.latest_data.confirmed,
			recovered: d.latest_data.recovered,
			deaths: d.latest_data.deaths,
			lastUpdate: d.updated_at,
		};
		output = [...output, obj];
	}
	return output;
};
