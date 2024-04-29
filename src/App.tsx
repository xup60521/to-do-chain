import { useState } from "react";
import ToDo from "./components/ToDo";
import Rule from "./components/Rule";

type Page = "to-do" | "rule" | "";

export default function App() {
    const [page, setPage] = useState<Page>("to-do");

    return (
        <div className="w-screen h-screen bg-neutral-800 text-white overflow-hidden flex">
            <nav className="w-fit p-8 h-full flex flex-col flex-shrink-0 justify-between">
                <h1 className="font-mono text-3xl text-center py-4">To-do Chain</h1>
                <div className="font-mono w-full flex flex-col text-lg">
                    <button
                        className={`w-full text-center p-2 rounded-full hover:bg-white hover:text-black transition-all ${
                            page === "to-do" && "bg-white text-black"
                        }`}
                        onClick={() => setPage("to-do")}
                    >
                        To-do
                    </button>
                    <button
                        className={`w-full text-center p-2 rounded-full hover:bg-white hover:text-black transition-all ${
                            page === "rule" && "bg-white text-black"
                        }`}
                        onClick={() => setPage("rule")}
                    >
                        Rule
                    </button>
                    <button
                        className={`w-full text-center p-2 rounded-full hover:bg-white hover:text-black transition-all ${
                            page === "" && "bg-white text-black"
                        }`}
                        onClick={() => setPage("")}
                    >
                        No
                    </button>
                </div>
                <div></div>
            </nav>
            <main className="flex-grow h-full">
                <PageSwitchView page={page} />
            </main>
        </div>
    );
}

function PageSwitchView({ page }: { page: Page }) {
    switch (page) {
        case "to-do":
            return <ToDo />;
        case "rule":
            return <Rule />;
        default:
            return null;
    }
}
