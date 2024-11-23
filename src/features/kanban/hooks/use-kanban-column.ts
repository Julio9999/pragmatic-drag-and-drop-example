import { useEffect, useRef } from "react";

import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import { useKanbanStore } from "../../../stores/kanban.store";

interface Props {
    index: number;   
}

export const useKanbanColumn = ({index}: Props) => {
    const ref = useRef(null)

    const columnId = useKanbanStore((store) => store.kanbanColumnsIds[index]);
    const column = useKanbanStore((store) => store.kanbanColumns[columnId]);

    const updateItem = useKanbanStore((store) => store.updateItem)
    

    useEffect(() => {

        const element = ref.current;
        if (!element) return;

        return dropTargetForElements({
            element: element,
            getData() {
                return { id: column.id };
            },
            onDrop({ source, self }) {
                const from = source.data.columnId as string;
                const itemId = source.data.id as string;
                const to = self.data.id as string;
                updateItem(from as string, to, itemId)
            },

        });
    }, [updateItem, column.id])

    return {
        ref,
        column
    }
}