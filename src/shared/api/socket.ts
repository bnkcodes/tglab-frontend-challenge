import { io, type Socket } from "socket.io-client";
import Cookies from "js-cookie";

import { appConfig } from "@app/configs";

let socket: Socket | null = null;

export function connectSocket() {
  const token = Cookies.get(appConfig.auth.storageKey);
  if (!token) return null;

  if (socket?.connected) return socket;

  socket = io(appConfig.api.baseURL, {
    auth: { token },
    autoConnect: true,
    reconnection: true,
  });

	socket.on('connect_error', (err) => {
		console.warn('[socket] connect_error:', err.message);
	});

  return socket;
}

export function getSocket() {
  return socket;
}

export function disconnectSocket() {
  socket?.disconnect();
  socket = null;
}
