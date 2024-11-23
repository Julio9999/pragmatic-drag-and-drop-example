import { KanbanItem } from './kanban-item';
import { useKanbanColumn } from '../hooks/use-kanban-column';

interface Props {
    index: number;
}

export const KanbanColumn = ({ index }: Props) => {

    const { ref, column } = useKanbanColumn({ index })

    console.log(`hola soy la columna ${index}`)

    return (
        <div className="flex select-none flex-col gap-4 w-56 border-blue-500 h-96 max-h-96 min-w-96 overflow-auto border-2 p-4" data-id={column.id} ref={ref}>
            <p>Cantidad de items: {column.items.length}</p>
            <p>{column.title}</p>
            {
                column.items.map(item => (
                    <KanbanItem
                        columnId={column.id}
                        description={item.description}
                        id={item.id}
                        title={item.title}
                        key={item.id}
                    />
                ))
            }
        </div>
    )
}