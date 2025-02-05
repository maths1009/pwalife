import type { Meta, StoryFn } from "@storybook/react";
import { Root as Dialog, Trigger, Content, Title, Close } from "./Dialog";

export default {
	title: "Components/Dialog",
	component: Dialog,
} as Meta;

const Template: StoryFn = () => (
	<Dialog>
		<Trigger>
			<button className="rounded-lg bg-blue-500 px-4 py-2 text-white">
				Ouvrir le Dialog
			</button>
		</Trigger>

		<Content>
			<Title>Confirmation</Title>
			<p className="mt-2 text-gray-600">Es-tu sûr de vouloir continuer ?</p>
			<div className="mt-4 flex justify-end space-x-2">
				<Close>
					<button className="rounded-lg bg-gray-300 px-4 py-2">Annuler</button>
				</Close>
				<Close>
					<button className="rounded-lg bg-red-500 px-4 py-2 text-white">
						Confirmer
					</button>
				</Close>
			</div>
		</Content>
	</Dialog>
);

export const Default = Template.bind({});
