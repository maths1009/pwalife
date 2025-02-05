import { useEffect, useState } from "react";

type UseLocationProps = {
	onSuccess?: (location: [number, number]) => void;
	onError?: (error: string) => void;
};

const useLocation = ({ onSuccess, onError }: UseLocationProps = {}) => {
	const [location, setLocation] = useState<[number, number] | null>(null);

	useEffect(() => {
		if (!("geolocation" in navigator)) {
			onError?.("La géolocalisation n'est pas supportée.");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				const l: [number, number] = [coords.latitude, coords.longitude];
				setLocation(l);
				onSuccess?.(l);
			},
			(err) => onError?.(err.message),
		);
	}, [onError, onSuccess]);

	return { location };
};

export { useLocation };
