import { create } from "zustand";

export type todoType = {
    id: string;
    name: string;
    checked: boolean;
    group: string;
};

interface ToDoState {
    data: todoType[];
    newTodo: (item: todoType) => void;
    updateTodo: (item: todoType) => void;
    deleteTodo: (id: string) => void;
}

export const useToDoStore = create<ToDoState>((set) => ({
    data: [],
    newTodo(item) {
        set((state) => {
            state.data = [...state.data, item];
            return { ...state };
        });
    },
    updateTodo(item) {
        set((state) => {
            const { id } = item;
            const newData = state.data.map(d => {
                if (d.id !== id) {
                    return d
                }
                return item
            })
            state.data = newData
            return {...state}
        });
    },
    deleteTodo(id) {
        set(state => {
            state.data = state.data.filter(d => d.id !== id)
            return {...state}
        })
    },
}));

