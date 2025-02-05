import { useEffect, useState } from "react";

type UseOfflineProps = {
	onStatusChange?: (isOffline: boolean) => void;
};

const useOffline = ({ onStatusChange }: UseOfflineProps = {}) => {
	const [isOffline, setIsOffline] = useState(!navigator.onLine);

	useEffect(() => {
		const handleStatusChange = (offline: boolean) => {
			setIsOffline(offline);
			onStatusChange?.(offline);
		};

		const handleOffline = () => handleStatusChange(true);
		const handleOnline = () => handleStatusChange(false);

		window.addEventListener("offline", handleOffline);
		window.addEventListener("online", handleOnline);

		return () => {
			window.removeEventListener("offline", handleOffline);
			window.removeEventListener("online", handleOnline);
		};
	}, [onStatusChange]);

	return isOffline;
};

export { useOffline };
