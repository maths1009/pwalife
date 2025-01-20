import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/index.scss";

// =======================================

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<p>INIT</p>
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the document.");
}
