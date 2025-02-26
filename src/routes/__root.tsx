import { CameraDialog, Footer } from "@/components";
import { createRootRoute } from "@tanstack/react-router";

import { Map } from "@/components";
import { useBattery, useLocation, useVibration } from "@/hooks";
import { useImageStore } from "@/stores";
import { getGeographicCenter } from "@/utils";
import { toast } from "react-toastify";
import { ChatDialog } from "@/components/ChatDialog";

const RootComponent = () => {
	const { location } = useLocation({ onError: console.error });
	const { level, charging } = useBattery();
	const { vibrate } = useVibration({ onError: toast.error });

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

				<Footer.Item>
					🔋 {level !== undefined && `${level.toFixed(0)}%`}
					{!!charging && " (en charge)"}
				</Footer.Item>

				<Footer.Item onClick={() => vibrate(200)}>📳 Vibration</Footer.Item>

				<ChatDialog.Dialog>
					<Footer.Item>💬 Chat</Footer.Item>
				</ChatDialog.Dialog>
			</Footer.Root>
		</div>
	);
};

const Route = createRootRoute({
	component: RootComponent,
});

export { Route };
