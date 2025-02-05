/// <reference lib="webworker" />

interface BatteryManager extends EventTarget {
	charging: boolean;
	level: number;
	chargingTime: number;
	dischargingTime: number;
	onchargingchange?: () => void;
	onlevelchange?: () => void;
}

interface Navigator {
	getBattery?: () => Promise<BatteryManager>;
}
