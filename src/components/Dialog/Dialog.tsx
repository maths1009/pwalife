import * as RadixDialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

/* ROOT */
type RootProps = { children: ReactNode };
const Root = ({ children }: RootProps) => (
	<RadixDialog.Root>{children}</RadixDialog.Root>
);
Root.displayName = "DialogRoot";

/* TRIGGER */
type TriggerProps = { children: ReactNode };
const Trigger = ({ children }: TriggerProps) => (
	<RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
);
Trigger.displayName = "DialogTrigger";

/* CONTENT */
type ContentProps = { children: ReactNode };
const Content = ({ children }: ContentProps) => (
	<RadixDialog.Portal>
		<RadixDialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
		<RadixDialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
			{children}
		</RadixDialog.Content>
	</RadixDialog.Portal>
);
Content.displayName = "DialogContent";

/* TITLE */
type TitleProps = { children: ReactNode };
const Title = ({ children }: TitleProps) => (
	<RadixDialog.Title className="text-lg font-semibold">
		{children}
	</RadixDialog.Title>
);
Title.displayName = "DialogTitle";

/* CLOSE */
type CloseProps = { children: ReactNode };
const Close = ({ children }: CloseProps) => (
	<RadixDialog.Close asChild>{children}</RadixDialog.Close>
);
Close.displayName = "DialogClose";

export { Root, Trigger, Content, Title, Close };
export type { RootProps, TriggerProps, ContentProps, TitleProps, CloseProps };
