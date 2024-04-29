import { useRef, useState } from "react";
import { type todoType, useToDoStore } from "../state/store";
import { v4 } from "uuid";
import { Checkbox } from "@/components/ui/checkbox";
import ReactSelect from "react-select/creatable";
import { useRule } from "@/hooks/useRule";

export default function ToDo() {
    const newTodoNameInputRef = useRef<HTMLInputElement>(null);
    const { newTodo, data } = useToDoStore();
    const [group, setGroup] = useState<string>("default")
    const { updateTodo } = useRule();
    function createTodo(e?: React.KeyboardEvent) {
        const newName = newTodoNameInputRef.current?.value;
        if (!newName) return;
        if (typeof e !== "undefined" && e?.key !== "Enter") {
            return;
        }
        newTodo({
            id: v4(),
            name: newName,
            group: group ?? "default",
            checked: false,
        });
        newTodoNameInputRef.current.value = "";
    }

    return (
        <div className="w-full h-full p-8 min-w-0">
            <div className="w-full h-full border-[1px] border-neutral-400 rounded-md flex flex-col min-h-0 p-4 gap-4">
                <div className="flex gap-4">
                    <button
                        onClick={() => createTodo()}
                        className="rounded-md bg-transparent border-[1px] border-white text-white  hover:text-black font-mono transition-all hover:bg-neutral-100 w-fit px-3 py-2"
                    >
                        New To-do
                    </button>
                    <input
                        ref={newTodoNameInputRef}
                        type="text"
                        onKeyDown={createTodo}
                        placeholder="new to-do"
                        className="rounded-md bg-transparent border-[1px] border-white text-white p-2"
                    />
                    <ReactSelect className="text-black w-56" isClearable defaultInputValue={"default"} options={[{label: "default", value: "default"}]} onChange={e => setGroup(e?.value ?? "")}  placeholder="group" />
                </div>
                <div className="p-1 w-full border-t-[1px] border-white"></div>
                <div className="flex flex-col gap-4">
                    {data.map((item) => (
                        <ToDoItem item={item} key={item.id} updateTodo={updateTodo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ToDoItem({ item, updateTodo }: { item: todoType, updateTodo: (item: todoType) => void }) {

    function onChecked(e: boolean) {
        item.checked = e
        updateTodo({...item})
    }
    return (
        <div className="w-full flex gap-4 items-center">
            <Checkbox onCheckedChange={onChecked} className="border-white" checked={item.checked} />
            <span className="text-xs p-1 px-2 rounded-full bg-white text-black">{item.group}</span>
            <p>{item.name}</p>
        </div>
    );
}
