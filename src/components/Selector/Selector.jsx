import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import './Selector.css';

const Selector = props => {
	const { data, value, handleCountryChange } = props;

	return (
		<FormControl className="selector" variant="filled">
			<InputLabel>Country</InputLabel>
			<Select
				defaultValue={value}
				onChange={e => handleCountryChange(e.target.value)}
			>
				{data.map((country, i) => (
					<MenuItem key={i} value={country}>
						{country}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default Selector;
