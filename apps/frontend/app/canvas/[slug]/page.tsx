
import CanvasClient from "@/components/CanvasClient";
import { BACKEND_URL } from "@/config";
import Link from "next/link";


export default async function CanvasPage({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const slug = (await params).slug;


    try {
        const resp = await fetch(`${BACKEND_URL}/room/${slug}`);

        if (!resp.ok) {

            return (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Room not found</h1>
                        <p className="text-gray-600 mb-4">The room you&apos;re looking for doesn&apos;t exist.</p>
                        <Link href="/" className="text-blue-500 underline">Go back home</Link>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <CanvasClient roomId={slug} />
            </div>
        );
    } catch {

        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Error loading room</h1>
                    <p className="text-gray-600 mb-4">Failed to load the room. Please try again.</p>
                    <Link href="/" className="text-blue-500 underline">Go back home</Link>
                </div>
            </div>
        );
    }
}
