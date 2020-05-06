import React from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Map.css';

const token =
	'pk.eyJ1IjoibHVpc3F1aXRlcmlvIiwiYSI6ImNrOXVzbjNxcDA1Ym0zZXBrbW05OGxxcWYifQ.SVWw08yucUj9WVJL4CsjEA';

const Map = () => {
	return (
		<div>
			<Card className="card confirmed">
				<CardContent>
					<Typography gutterBottom>Total confirmed</Typography>
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
							<div
								style={{
									backgroundColor: '#00a9e0',
									borderRadius: '50%',
									height: 25,
									width: 25,
								}}
							/>
						</Marker>
					</ReactMapGL>
				</CardContent>
			</Card>
		</div>
	);
};

export default Map;
