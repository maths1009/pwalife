import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useImageStore } from "./stores";
import { Bounce, ToastContainer } from "react-toastify";

import "@/styles/index.scss";
import { useNotification, useOffline } from "./hooks";

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
});

useImageStore.getState().loadImages();

const App = () => {
	const { sendNotification } = useNotification();

	const _isOffline = useOffline({
		onStatusChange: (isOffline) =>
			sendNotification(
				"info",
				isOffline ? "Vous êtes hors ligne" : "Vous êtes en ligne",
			),
	});

	return (
		<>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Bounce}
			/>
			<RouterProvider router={router} />
		</>
	);
};

export { App };
