import { create, StateCreator } from "zustand";
import { generateKanbanBoard } from "../features/kanban/utils/generate-kanban";

type KanbanItem = {
    id: string;
    title: string;
    description: string;
}

type KanbanColumn = {
    id: string;
    title: string;
    items: KanbanItem[];
}

interface KanbanState {
    kanbanColumns: Record<string, KanbanColumn>;
    kanbanColumnsIds: string[];
    updateItem: (from: string, to: string, itemId: string) => void;
}

const initialKanbanBoard = generateKanbanBoard(15, 1000)


const KanbanStoreApi: StateCreator<KanbanState> = (set) => ({
    kanbanColumns: initialKanbanBoard.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
    }, {} as Record<string, KanbanColumn>),
    kanbanColumnsIds: initialKanbanBoard.map(column => column.id) ,

    updateItem: (from, to, itemId) => {
        set((state) => {
            const sourceColumn = state.kanbanColumns[from];
            const targetColumn = state.kanbanColumns[to];

            if (!sourceColumn || !targetColumn) return state;

            const itemIndex = sourceColumn.items.findIndex((item) => item.id === itemId);
            if (itemIndex === -1) return state;

            const [movedItem] = sourceColumn.items.splice(itemIndex, 1);
            targetColumn.items.push(movedItem);

            return {
                kanbanColumns: {
                    ...state.kanbanColumns,
                    [from]: { ...sourceColumn },
                    [to]: { ...targetColumn },
                },
            };
        });
    },

})

export const useKanbanStore = create<KanbanState>()(KanbanStoreApi)