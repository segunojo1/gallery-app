import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem ({id, url, tags}) {

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
              <div className={`w-[350px] h-[350px] rounded-2xl relative imgg`}
              style={{backgroundImage: `url('${url}')`, backgroundPosition: "center", backgroundSize: "cover"}}>
               {/* <img src={url} alt="" className=" object-cover"/> */}
               <div className="p-2 rounded-xl bg-[#F4B241] absolute text-white top-[10px] left-[10px] w-fit">
                  <p>{tags}</p>
            </div>
              </div>
        </div>
       )
}