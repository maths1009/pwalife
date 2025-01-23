import { useState } from "react";

const useLocation = () => {
	const [location, setLocation] = useState<[number, number] | null>(null);
	const [error, setError] = useState<string | null>(null);

	if (!location && !error) {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				setLocation([coords.latitude, coords.longitude]);
				setError(null);
			},
			(err) => {
				setLocation(null);
				setError(err.message);
			},
		);
	}

	return { location, error };
};

export { useLocation };
