import { type todoType, useToDoStore } from "@/state/store";
import { useState } from "react";
import { v4 } from "uuid";

export function useRule() {
    const { updateTodo: updateTodoState, newTodo } = useToDoStore();
    const [updateTime, setUpdateTime] = useState(0);
    return {
        updateTodo(item: todoType) {
            if (item.checked === true && item.group !== "comic") {
                setUpdateTime(updateTime + 1);
                if (updateTime % 2 === 1) {
                    newTodo({
                        id: v4(),
                        name: "漫畫扣打",
                        checked: false,
                        group: "comic"
                    })
                }
            }
            updateTodoState({ ...item });
        },
    };
}
