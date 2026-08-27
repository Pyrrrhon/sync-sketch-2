"use client"

import { useState } from "react";
import Canvas from "./Canvas";
import { useSocket } from "@/hooks/useSocket";

export default function CanvasClient({ roomId: initialRoomId }: { roomId?: string }) {
    const [roomId, setRoomId] = useState<string | undefined>(initialRoomId);
    const { socket, sessionId } = useSocket(roomId);

    return (
        <Canvas roomId={roomId} socket={socket} setRoomId={setRoomId} sessionId={sessionId} />
    )
}
