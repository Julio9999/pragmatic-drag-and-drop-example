import { KanbanColumn } from "./kanban-column";
import { KanbanItem } from "./kanban-item";
import { kanbanBoard } from '../../../../data/kanban-data';


export const Kanban = () => {
    return (
        <div className="flex gap-6 items-center justify-center pt-14 h-screen">
            {kanbanBoard.map(item  => (
                <KanbanColumn title={item.title} key={item.id} id={item.id}>
                    {item.items.map(item => (
                        <KanbanItem title={item.title} description={item.description} id={item.id} />
                    ))}
                </KanbanColumn> 
            ))}
        </div>
        
    )
}