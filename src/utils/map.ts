const getGeographicCenter = (
	coordinates: [number, number][],
): [number, number] => {
	if (coordinates.length === 0) return [46.603354, 1.888334];

	const total = coordinates.reduce(
		(acc, [lat, lon]) => {
			acc.lat += lat;
			acc.lon += lon;
			return acc;
		},
		{ lat: 0, lon: 0 },
	);

	return [total.lat / coordinates.length, total.lon / coordinates.length];
};

export { getGeographicCenter };
