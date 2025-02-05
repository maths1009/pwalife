import { useEffect, useState } from "react";

const useBattery = () => {
	const [battery, setBattery] = useState<BatteryManager | null>(null);

	useEffect(() => {
		navigator.getBattery?.().then((batt) => {
			setBattery(batt);
			const update = () => setBattery({ ...batt });

			batt.addEventListener("chargingchange", update);
			batt.addEventListener("levelchange", update);

			return () => {
				batt.removeEventListener("chargingchange", update);
				batt.removeEventListener("levelchange", update);
			};
		});
	}, []);

	return {
		level: battery?.level ? battery.level * 100 : undefined,
		charging: battery?.charging ?? undefined,
	};
};

export { useBattery };
