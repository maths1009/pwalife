import { useEffect, useState } from "react";

const useLocation = () => {
	const [location, setLocation] = useState<[number, number] | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!("geolocation" in navigator)) {
			setError("La géolocalisation n'est pas supportée.");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			({ coords }) => setLocation([coords.latitude, coords.longitude]),
			(err) => setError(err.message),
		);
	}, []);

	return { location, error };
};

export { useLocation };
