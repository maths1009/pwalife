import ReactDOM from "react-dom/client";

import "@/styles/index.scss";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const rootElement = document.getElementById("root");

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
});

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
	console.error("Element 'root' not found in the document.");
}
