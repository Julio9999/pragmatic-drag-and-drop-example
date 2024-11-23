import { useKanbanItem } from '../hooks/use-kanban-item';

interface Props {
    title: string;
    description: string;
    id: string;
    columnId: string;
    style?: React.CSSProperties;
}

export const KanbanItem = ({title, description, id, columnId, style}: Props) => {

    const { ref } = useKanbanItem({columnId, id})

    return (
        <div data-id={id} className="border-green-500 border max-h-14" ref={ref} style={style}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}