import type { Meta, StoryFn } from "@storybook/react";
import type { RootProps } from "./Footer";
import { Root, Item } from "./Footer";

const defaultArgs = {
	children: "Contenu du footer",
};

const argTypes = {
	children: {
		control: { type: "text" },
		description: "Contenu à afficher dans le footer",
		defaultValue: defaultArgs.children,
	},
};

export default {
	title: "Components/Footer",
	component: Root,
	argTypes,
} as Meta<RootProps>;

const Template: StoryFn<RootProps> = (args) => (
	<div className="relative h-screen w-screen bg-gray-100">
		<Root {...args}>
			<Item>🔍 Explorer</Item>
			<Item>📍 Mes lieux</Item>
		</Root>
	</div>
);

export const Default = Template.bind({});
Default.args = defaultArgs;
