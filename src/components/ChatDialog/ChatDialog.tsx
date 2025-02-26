import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Dialog as DialogComponent } from "@/components";

//! improve check env with schema validator (zod)

const socket = io(import.meta.env.VITE_SOCKET_CHAT_URL);

interface ChatDialogProps {
	children: React.ReactNode;
}

const Dialog = ({ children }: ChatDialogProps) => {
	const [pseudo, setPseudo] = useState("");
	const [roomId] = useState("general");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState<
		{ content: string; pseudo: string; dateEmis: string }[]
	>([]);
	const [connected, setConnected] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		socket.on("chat-msg", (data) => {
			setMessages((prev) => [...prev, data]);
		});

		return () => {
			socket.off("chat-msg");
		};
	}, []);

	const handleJoin = () => {
		if (!pseudo.trim()) return;
		socket.emit("chat-join-room", { pseudo, roomId });
		setConnected(true);
	};

	const handleSendMessage = () => {
		if (!message.trim()) return;
		socket.emit("chat-msg", { content: message, roomId });
		setMessage("");
	};

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<DialogComponent.Root>
			<DialogComponent.Trigger>{children}</DialogComponent.Trigger>
			<DialogComponent.Content className="flex w-96 flex-col gap-4 p-4">
				{!connected ? (
					<>
						<input
							type="text"
							placeholder="Pseudo"
							value={pseudo}
							onChange={(e) => setPseudo(e.target.value)}
							className="w-full rounded border border-gray-300 p-2"
						/>
						<button
							onClick={handleJoin}
							disabled={!pseudo.trim()}
							className="w-full rounded bg-blue-500 p-2 text-white disabled:bg-gray-400"
						>
							Rejoindre
						</button>
					</>
				) : (
					<>
						<div className="h-64 overflow-y-auto rounded bg-gray-100 p-2">
							{messages.map((msg, index) => (
								<div key={index} className="mb-2 rounded bg-white p-2 shadow">
									<span className="font-bold">{msg.pseudo}</span>: {msg.content}
									<div className="text-xs text-gray-500">
										{new Date(msg.dateEmis).toLocaleTimeString()}
									</div>
								</div>
							))}
							<div ref={messagesEndRef} />
						</div>
						<div className="flex gap-2">
							<input
								type="text"
								placeholder="Écrire un message..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
								className="flex-1 rounded border border-gray-300 p-2"
							/>
							<button
								onClick={handleSendMessage}
								disabled={!message.trim()}
								className="rounded bg-blue-500 p-2 text-white disabled:bg-gray-400"
							>
								Envoyer
							</button>
						</div>
					</>
				)}
			</DialogComponent.Content>
		</DialogComponent.Root>
	);
};

export { Dialog };
