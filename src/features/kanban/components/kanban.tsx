import { KanbanColumn } from "./kanban-column";
import { useKanbanStore } from "../../../stores/kanban.store";


export const Kanban = () => {

    const kanbanColumnsIds = useKanbanStore(store => store.kanbanColumnsIds);

    return (
        <div className="flex gap-6 pt-14 h-screen w-screen border-red-500 border-2 overflow-auto">
            {kanbanColumnsIds.map((column, index) => (
                <KanbanColumn
                    index={index}
                    key={column}
                />
            ))}
        </div>

    )
}