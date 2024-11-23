import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useRef } from "react";

interface Props {
    title: string;
    id: string;
    children: React.ReactNode;
}

export const KanbanColumn = ({title, id, children}: Props) => {

    const ref = useRef(null)

    useEffect(() => {

        const element = ref.current;
        if(!element) return;

        return dropTargetForElements({
            element: element,
        });
    }, [])

    return (
        <div className="flex flex-col gap-4 border-blue-500 h-96 max-h-96 overflow-auto border-2 p-4" data-id={id} ref={ref}>
            <p>{title}</p>
            {children}
        </div>
    )
}