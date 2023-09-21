import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem ({id, url}) {

       const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
       } = useSortable({id: id});

       const style = {
        transform: CSS.Transform.toString(transform),
        transition
       }

       return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
              <div className={`w-[400px] h-[400px] rounded-2xl`}
              style={{backgroundImage: `url('${url}')`, backgroundPosition: "center", backgroundSize: "cover"}}>
               {/* <img src={url} alt="" className=" object-cover"/> */}
              </div>
        </div>
       )
}