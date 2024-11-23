
import { KanbanItem } from './kanban-item';
import { useKanbanColumn } from '../hooks/use-kanban-column';
import { FixedSizeList as List, ListChildComponentProps } from "react-window";


interface Props {
    index: number;
    style?: React.CSSProperties;
}

export const KanbanColumn = ({ index, style }: Props) => {

    const { ref, column } = useKanbanColumn({ index })



    const itemHeight = 80; 
    const listHeight = window.innerHeight - 200; 

    const renderItem = ({ index, style }: ListChildComponentProps) => {
        const item = column.items[index];
        return (
            <KanbanItem
                key={item.id}
                title={item.title}
                description={item.description}
                id={item.id}
                columnId={column.id}
                style={style}
            />
        );
    };

    return (
        <div className="flex select-none flex-col gap-4  h-96 min-w-96  max-w-96 overflow-auto border p-4" data-id={column.id} ref={ref} style={style}>
            <p>Cantidad de items: {column.items.length}</p>
            <p>{column.title}</p>
            <List
                height={listHeight}
                itemCount={column.items.length}
                itemSize={itemHeight}
                width={350}
            >
                {renderItem}
            </List>
        </div>
    )
}