import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <main className="min-w-screen min-h-screen p-1 bg-background flex flex-col">
            <div className="w-screen fixed">
                <Navbar />
            </div>
            <Outlet />
        </main>
    )
}
