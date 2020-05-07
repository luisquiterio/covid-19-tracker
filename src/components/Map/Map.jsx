import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import {
	Card,
	CardContent,
	LinearProgress,
	Typography,
} from '@material-ui/core';
import './Map.css';

const token =
	'pk.eyJ1IjoibHVpc3F1aXRlcmlvIiwiYSI6ImNrOXVzbjNxcDA1Ym0zZXBrbW05OGxxcWYifQ.SVWw08yucUj9WVJL4CsjEA';

const calculateSizes = data => {
	const output = data.filter(c => c.confirmed > 0);
	for (const c of output) {
		if (c.confirmed >= 1000000) {
			c.size = 50;
		} else if (c.confirmed >= 500000) {
			c.size = 35;
		} else if (c.confirmed >= 200000) {
			c.size = 25;
		} else if (c.confirmed >= 25000) {
			c.size = 15;
		} else {
			c.size = 5;
		}
	}
	return output;
};

const Map = props => {
	const { data, dataLoaded } = props;

	if (!dataLoaded) {
		return <LinearProgress></LinearProgress>;
	}

	const sized = calculateSizes(data);

	return (
		<Card className="confirmed">
			<CardContent>
				<Typography gutterBottom>Confirmed cases</Typography>
				<ReactMapGL
					width="100%"
					height={450}
					latitude={0}
					longitude={0}
					zoom={1.2}
					mapboxApiAccessToken={token}
					mapStyle="mapbox://styles/mapbox/light-v10"
				>
					{sized.map((c, index) => {
						return (
							<Marker
								key={index}
								latitude={Number(c.latitude)}
								longitude={Number(c.longitude)}
							>
								<div
									className="marker"
									style={{ height: c.size, width: c.size }}
								/>
							</Marker>
						);
					})}
				</ReactMapGL>
			</CardContent>
		</Card>
	);
};

export default Map;
