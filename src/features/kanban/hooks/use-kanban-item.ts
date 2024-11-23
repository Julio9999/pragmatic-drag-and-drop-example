import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { useEffect, useRef } from "react";

interface Props {
    id: string;
    columnId: string;
}

export const useKanbanItem = ({id, columnId}: Props) => {

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if(!element) return;

        return draggable({
            element: element,
            getInitialData(){
                return {id, columnId};
            }
        });
    }, [id, columnId]);


    return {
        ref
    }
}