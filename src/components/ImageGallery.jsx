import React from 'react';
import ImageItem from './ImageItem';
import { useState } from 'react';
import { SortableItem } from './SortableItem';
import { 
        arrayMove,
        SortableContext,
        verticalListSortingStrategy,
        rectSortingStrategy
} from '@dnd-kit/sortable';
import {
        DndContext,
        closestCenter
} from "@dnd-kit/core"
import { images } from '../images';

const ImageGallery = () => { 

        const [img, setImg] = useState(images);
  return (
        <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        >

                <SortableContext
                items={img}
                strategy={rectSortingStrategy}
                >
                        <div className='grid grid-cols-3 gap-5 p-5 '>
                        {img.map((ite) => <SortableItem key={ite.id} id={ite.id} url={ite.url}/>)}
                        </div>
                </SortableContext>
        </DndContext>
  );
  
  function handleDragEnd(event) {
        console.log("drag end");
        const {active, over} = event; 
        console.log("actve " + active.id);
        console.log("over" + over.id);
        if (active.id !== over.id) {
                setImg((items) => {
                        const activeIndex = items.findIndex((item) => item.id === active.id);
      const overIndex = items.findIndex((item) => item.id === over.id);

      if (activeIndex === -1 || overIndex === -1) {
        // Handle the case where either active or over item is not found
        return items;
      }

      const newItems = [...items];
      const [draggedItem] = newItems.splice(activeIndex, 1);
      newItems.splice(overIndex, 0, draggedItem);
      return newItems;
                });
        }
  }
};

export default ImageGallery;