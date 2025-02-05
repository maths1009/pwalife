import { useRef, useEffect } from "react";

type UseCameraProps = {
	onSuccess?: (photoBase64: string) => void;
	onError?: (error: string) => void;
};

const useCamera = ({ onSuccess, onError }: UseCameraProps = {}) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		return () => stopCamera();
	}, []);

	const startCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: { width: 1920, height: 1080 },
			});
			if (videoRef.current) videoRef.current.srcObject = stream;
		} catch {
			onError?.("Accès à la caméra refusé.");
		}
	};

	const stopCamera = () => {
		const stream = videoRef.current?.srcObject as MediaStream;
		stream.getTracks().forEach((track) => track.stop());
	};

	const takePhoto = () => {
		if (!videoRef.current) return;
		const video = videoRef.current;

		const canvas = document.createElement("canvas");
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		const ctx = canvas.getContext("2d");

		if (ctx) {
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
			const photoBase64 = canvas.toDataURL("image/png");
			onSuccess?.(photoBase64);
		}
	};

	return { videoRef, startCamera, takePhoto, stopCamera };
};

export { useCamera };
