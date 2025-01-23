import type { Meta, StoryFn } from "@storybook/react";
import type { RootProps } from "./Map";
import { Root, Map, Group, Marker, Popup } from "./Map";
import type { LatLngExpression } from "leaflet";

const defaultArgs = {
	center: [51.505, -0.09] as LatLngExpression,
	zoom: 13,
};

const argTypes = {
	center: {
		control: { type: "object" },
		description: "Center of the map (latitude and longitude)",
		defaultValue: defaultArgs.center,
	},
	zoom: {
		control: { type: "number" },
		description: "Zoom level of the map",
		defaultValue: defaultArgs.zoom,
	},
};

export default {
	title: "Components/Map",
	component: Root,
	argTypes,
} as Meta<RootProps>;

const createTemplate =
	(
		markers: Array<{ position: [number, number]; content: string }>,
	): StoryFn<RootProps> =>
	(args) => (
		<Root
			center={args.center}
			zoom={args.zoom}
			style={{ height: "500px", width: "100%" }}
		>
			<Map />
			<Group>
				{markers.map((marker, index) => (
					<Marker key={index} position={marker.position}>
						<Popup>{marker.content}</Popup>
					</Marker>
				))}
			</Group>
		</Root>
	);

export const Default = createTemplate([
	{
		position: [51.505, -0.09],
		content: "A pretty CSS3 popup.<br />Easily customizable.",
	},
	{ position: [51.515, -0.1], content: "Another marker." },
	{ position: [51.525, -0.08], content: "Yet another marker." },
]);
Default.args = defaultArgs;

// Story avec des marqueurs personnalisés
export const CustomMarkers = createTemplate([
	{ position: [40.7128, -74.006], content: "New York" },
	{ position: [34.0522, -118.2437], content: "Los Angeles" },
	{ position: [48.8566, 2.3522], content: "Paris" },
]);
CustomMarkers.args = {
	...defaultArgs,
	center: [40.7128, -74.006],
};
