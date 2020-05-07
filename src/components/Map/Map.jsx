import React from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Map.css';

const token =
	'pk.eyJ1IjoibHVpc3F1aXRlcmlvIiwiYSI6ImNrOXVzbjNxcDA1Ym0zZXBrbW05OGxxcWYifQ.SVWw08yucUj9WVJL4CsjEA';

const Map = () => {
	return (
		<Card className="confirmed">
			<CardContent>
				<Typography gutterBottom>Total confirmed cases</Typography>
				<ReactMapGL
					width="100%"
					height={300}
					latitude={0}
					longitude={0}
					zoom={1}
					mapboxApiAccessToken={token}
					mapStyle="mapbox://styles/mapbox/light-v10"
				>
					<Marker longitude={0} latitude={0}>
						<div className="marker" />
					</Marker>
				</ReactMapGL>
			</CardContent>
		</Card>
	);
};

export default Map;
