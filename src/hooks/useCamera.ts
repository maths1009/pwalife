import { useRef, useState, useEffect } from "react";

export const useCamera = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [photo, setPhoto] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

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
			setError("Accès à la caméra refusé.");
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
			setPhoto(canvas.toDataURL("image/png"));
		}
	};

	return { videoRef, photo, error, startCamera, takePhoto, stopCamera };
};
