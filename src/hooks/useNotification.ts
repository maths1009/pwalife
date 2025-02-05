import { useEffect } from "react";
import type { TypeOptions, ToastOptions } from "react-toastify";
import { toast } from "react-toastify";

type UseNotificationProps = { onError?: (error: string) => void };

const useNotification = ({ onError }: UseNotificationProps = {}) => {
	useEffect(() => {
		if (!("Notification" in window))
			return onError?.("Les notifications ne sont pas supportées.");
		Notification.requestPermission().catch(() =>
			onError?.("Impossible de demander la permission."),
		);
	}, [onError]);

	const sendNotification = (
		type: TypeOptions,
		title: string,
		options?: NotificationOptions & ToastOptions,
	) =>
		Notification.permission === "granted"
			? new Notification(title, options)
			: toast(title, { ...options, type });

	return { sendNotification };
};

export { useNotification };
