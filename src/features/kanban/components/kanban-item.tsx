import { useKanbanItem } from '../hooks/use-kanban-item';

interface Props {
    title: string;
    description: string;
    id: string;
    columnId: string;
}

export const KanbanItem = ({title, description, id, columnId}: Props) => {

    const { ref } = useKanbanItem({columnId, id})

    return (
        <div data-id={id} className="border-green-500 border" ref={ref}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}