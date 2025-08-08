import { ModeToggle } from "@/components/toggle-dark";

export default function Home() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Home</h1>
            <p>This is the home page.</p>
            <ModeToggle />
        </div>
    );
}
