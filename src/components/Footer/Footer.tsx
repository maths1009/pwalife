import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

/* ROOT */
type RootProps = JSX.IntrinsicElements["div"];
const Root = ({ children, ...props }: RootProps) => (
	<div
		{...props}
		className={twMerge(
			"absolute bottom-4 left-1/2 flex max-w-[90vw] -translate-x-1/2 flex-row items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-lg",
			props.className,
		)}
	>
		{children}
	</div>
);
Root.displayName = "FooterRoot";

/* ITEM */
type ItemProps = JSX.IntrinsicElements["button"];
const Item = ({ children, ...props }: ItemProps) => (
	<button
		{...props}
		className={twMerge("rounded-lg bg-gray-200 px-4 py-2", props.className)}
	>
		{children}
	</button>
);
Item.displayName = "FooterItem";

export { Root, Item };
export type { RootProps, ItemProps };
