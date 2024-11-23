type KanbanItem = {
    id: string;
    title: string;
    description: string;
};

type KanbanColumn = {
    id: string;
    title: string;
    items: KanbanItem[];
};

export const generateKanbanBoard = (numColumns: number, itemsPerColumn: number): KanbanColumn[] => {
    const kanbanBoard: KanbanColumn[] = [];

    for (let columnIndex = 1; columnIndex <= numColumns; columnIndex++) {
        const columnId = columnIndex.toString();
        const columnTitle = `Column ${columnIndex}`;

        const items: KanbanItem[] = Array.from({ length: itemsPerColumn }, (_, itemIndex) => {
            const itemId = `${columnId}-${itemIndex + 1}`;
            return {
                id: itemId,
                title: `Task ${itemId}`,
                description: `Description of Task ${itemId}`,
            };
        });

        kanbanBoard.push({
            id: columnId,
            title: columnTitle,
            items,
        });
    }

    return kanbanBoard;
};
