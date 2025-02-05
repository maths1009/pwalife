import { createSelectors } from "@/utils";
import { keys, set as setIDB, del as delIDB, get } from "idb-keyval";
import { create } from "zustand";

interface ImageStoreState {
	images: Record<string, { image: string; location: [number, number] | null }>;
}

interface ImageStoreActions {
	addImage: (image: string, location: [number, number] | null) => Promise<void>;
	delImage: (id: string) => Promise<void>;
	loadImages: () => Promise<void>;
}

const useImageStoreBase = create<ImageStoreState & ImageStoreActions>(
	(set) => ({
		images: {},

		addImage: async (image, location) => {
			const id = Date.now().toString();
			const newImage = { image, location };

			await setIDB(id, newImage);
			set((state) => ({
				images: { ...state.images, [id]: newImage },
			}));
		},

		delImage: async (id) => {
			await delIDB(id);
			set((state) => {
				const newImages = { ...state.images };
				delete newImages[id];
				return { images: newImages };
			});
		},

		loadImages: async () => {
			const imageKeys = await keys();
			const loadedImages: Record<
				string,
				{ image: string; location: [number, number] | null }
			> = {};

			for (const key of imageKeys) {
				const value = await get(key);
				if (value) {
					loadedImages[key as string] = value;
				}
			}

			set({ images: loadedImages });
		},
	}),
);

const useImageStore = createSelectors(useImageStoreBase);

export { useImageStore };
