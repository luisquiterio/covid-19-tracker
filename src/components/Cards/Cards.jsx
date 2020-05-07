import React from 'react';
import {
	Card,
	CardContent,
	LinearProgress,
	Typography,
	Grid,
} from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';

const Cards = props => {
	const { data, dataLoaded, value } = props;

	if (!dataLoaded) {
		return <LinearProgress></LinearProgress>;
	}

	const obj = data.find(e => e.name === value);
	return (
		<Grid container spacing={2} justify="space-between">
			<Grid item>
				<Card className="card confirmed">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Total Confirmed
						</Typography>
						<Typography variant="h4">
							<CountUp
								start={0}
								end={obj.confirmed.value}
								duration={3}
								separator=","
							></CountUp>
						</Typography>
						<Typography color="textSecondary" gutterBottom>
							{new Date(obj.lastUpdate).toDateString()}
						</Typography>
						<Typography>{obj.name}</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<Card className="card recovered">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Total Recovered
						</Typography>
						<Typography variant="h4">
							<CountUp
								start={0}
								end={obj.recovered.value}
								duration={2}
								separator=","
							></CountUp>
						</Typography>
						<Typography color="textSecondary" gutterBottom>
							{new Date(obj.lastUpdate).toDateString()}
						</Typography>
						<Typography>{obj.name}</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<Card className="card deaths">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Total Deaths
						</Typography>
						<Typography variant="h4">
							<CountUp
								start={0}
								end={obj.deaths.value}
								duration={1}
								separator=","
							></CountUp>
						</Typography>
						<Typography color="textSecondary" gutterBottom>
							{new Date(obj.lastUpdate).toDateString()}
						</Typography>
						<Typography>{obj.name}</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Cards;
