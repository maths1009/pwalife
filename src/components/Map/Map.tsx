import MarkerClusterGroup from "react-leaflet-cluster";
import type {
	TileLayerProps,
	MapContainerProps,
	MarkerProps as MarkerPropsRL,
	PopupProps as PopupPropsRL,
} from "react-leaflet";

import {
	MapContainer,
	Marker as MarkerRL,
	Popup as PopupRL,
	TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

/* ROOT */
type RootProps = MapContainerProps;
const Root = MapContainer;
Root.displayName = "MapRoot";

/* MAP */
type MapProps = Omit<TileLayerProps, "url">;
const Map: React.FC<MapProps> = ({ ...props }) => (
	<TileLayer
		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		{...props}
	/>
);
Map.displayName = "Map";

/* Group */
type GroupProps = typeof MarkerClusterGroup;
const Group = MarkerClusterGroup;
Group.displayName = "Group";

/* Marker */
type MarkerProps = MarkerPropsRL;
const Marker = MarkerRL;
Marker.displayName = "Marker";

/* Popup */
type PopupProps = PopupPropsRL;
const Popup = PopupRL;
Popup.displayName = "Popup";

export { Root, Map, Group, Marker, Popup };
export type { RootProps, MapProps, GroupProps, MarkerProps, PopupProps };
