import { Dialog as DialogComponent } from "@/components/Dialog";
import { useLocation, useNotification } from "@/hooks";
import { useCamera } from "@/hooks/useCamera";
import { useImageStore } from "@/stores";
import { toast } from "react-toastify";

interface CameraDialogProps {
	children: React.ReactNode;
}

const Dialog: React.FC<CameraDialogProps> = ({ children }) => {
	const addImage = useImageStore.use.addImage();

	const { location } = useLocation();

	const { sendNotification } = useNotification();

	const { videoRef, startCamera, takePhoto, stopCamera } = useCamera({
		onError: toast.error,
		onSuccess: async (image) => {
			await addImage(image, location);
			sendNotification("success", "Photo prise et sauvegarder avec succès !");
		},
	});

	return (
		<DialogComponent.Root>
			<DialogComponent.Trigger>{children}</DialogComponent.Trigger>

			<DialogComponent.Content>
				<DialogComponent.Title>Prendre une photo</DialogComponent.Title>

				<div className="relative mt-4 flex justify-center">
					<video
						ref={videoRef}
						autoPlay
						className="w-full max-w-md rounded-lg shadow-lg"
					/>
				</div>

				<div className="mt-4 flex justify-between">
					<button
						onClick={startCamera}
						className="rounded-lg bg-gray-500 px-4 py-2 text-white"
					>
						🎥 Activer
					</button>
					<button
						onClick={takePhoto}
						className="rounded-lg bg-green-500 px-4 py-2 text-white"
					>
						📸 Capturer
					</button>
					<DialogComponent.Close>
						<button
							onClick={stopCamera}
							className="rounded-lg bg-red-500 px-4 py-2 text-white"
						>
							❌ Fermer
						</button>
					</DialogComponent.Close>
				</div>
			</DialogComponent.Content>
		</DialogComponent.Root>
	);
};

export { Dialog };
export type { CameraDialogProps };
