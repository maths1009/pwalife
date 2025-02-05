import type { JSX, ReactNode } from "react";

/* ROOT */
type RootProps = { children: ReactNode };
const Root = ({ children }: RootProps) => (
	<div className="absolute bottom-4 left-1/2 flex max-w-[90vw] -translate-x-1/2 flex-row items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-lg">
		{children}
	</div>
);
Root.displayName = "FooterRoot";

/* ITEM */
type ItemProps = Omit<JSX.IntrinsicElements["button"], "className">;
const Item = ({ children, ...props }: ItemProps) => (
	<button {...props} className="rounded-lg bg-gray-200 px-4 py-2">
		{children}
	</button>
);
Item.displayName = "FooterItem";

export { Root, Item };
export type { RootProps, ItemProps };
