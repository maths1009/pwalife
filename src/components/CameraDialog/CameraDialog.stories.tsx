import type { Meta, StoryFn } from "@storybook/react";
import { Dialog } from "./CameraDialog";

export default {
	title: "Components/CameraDialog",
	component: Dialog,
} as Meta;

const Template: StoryFn = () => (
	<Dialog>
		<button>CameraDialog</button>
	</Dialog>
);

export const Default = Template.bind({});
