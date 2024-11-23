import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useRef } from 'react';

interface Props {
    title: string;
    description: string;
    id: string;
}

export const KanbanItem = ({title, description, id}: Props) => {

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if(!element) return;

        return draggable({
            element: element,
        });
    }, []);

    return (
        <div data-id={id} className="border-green-500 border" ref={ref}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}