import ReactDOM from "react-dom/client";

import "@/styles/index.scss";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Bounce, ToastContainer } from "react-toastify";
import { useImageStore } from "./stores";

const rootElement = document.getElementById("root");

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
});

useImageStore.getState().loadImages();

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
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
		</>,
	);
} else {
	console.error("Element 'root' not found in the document.");
}
