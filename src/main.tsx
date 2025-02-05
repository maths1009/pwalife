import ReactDOM from "react-dom/client";

import { App } from "./app";

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<App />);
} else {
	console.error("Element 'root' not found in the document.");
}
