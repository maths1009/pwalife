import { useCallback } from "react";

interface UseVibrationProps {
	onError?: (error: string) => void;
}

const useVibration = ({ onError }: UseVibrationProps = {}) => {
	const vibrate = useCallback(
		(pattern: number | number[]) => {
			if (!("vibrate" in navigator)) {
				return onError?.("La vibration n'est pas supportée.");
			}
			navigator.vibrate(pattern);
		},
		[onError],
	);

	return { vibrate };
};

export { useVibration };
