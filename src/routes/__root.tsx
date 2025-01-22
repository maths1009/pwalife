import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

const RootComponent = () => {
	return (
		<React.Fragment>
			<div>Hello "__root"!</div>
			<Outlet />
		</React.Fragment>
	);
};

const Route = createRootRoute({
	component: RootComponent,
});

export { Route };
