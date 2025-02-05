import { CameraDialog, Footer } from "@/components";
import { createRootRoute } from "@tanstack/react-router";

import { Map } from "@/components";
import { useLocation } from "@/hooks";
import { useImageStore } from "@/stores";
import { getGeographicCenter } from "@/utils";

const RootComponent = () => {
	const { location } = useLocation();

	const images = useImageStore.use.images();

	const imagesLocation = Object.values(images);

	const center = getGeographicCenter(
		imagesLocation.map(({ location }) => location).filter(Boolean),
	);

	return (
		<div className="relative h-screen w-screen">
			<Map.Root center={center} zoom={8} className="h-full w-full">
				<Map.Map />
				{location && (
					<Map.Marker position={location}>
						<Map.Popup>Tu es ici !</Map.Popup>
					</Map.Marker>
				)}
				<Map.Group>
					{imagesLocation.map(
						({ image, location }) =>
							location && (
								<Map.Marker key={image.toString()} position={location}>
									<Map.Popup>
										<img src={image} alt="photo" />
									</Map.Popup>
								</Map.Marker>
							),
					)}
				</Map.Group>
			</Map.Root>

			<Footer.Root className={"z-[999]"}>
				<CameraDialog.Dialog>
					<Footer.Item>📷 Photo</Footer.Item>
				</CameraDialog.Dialog>
			</Footer.Root>
		</div>
	);
};

const Route = createRootRoute({
	component: RootComponent,
});

export { Route };
