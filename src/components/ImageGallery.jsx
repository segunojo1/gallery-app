import React, { useContext, useEffect } from 'react';
import ImageItem from './ImageItem';
import { useState } from 'react';
import { SortableItem } from './SortableItem';
import { 
        arrayMove,
        SortableContext,
        verticalListSortingStrategy,
        rectSortingStrategy,
        sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import {
        DndContext,
        closestCenter,
        KeyboardSensor,
        MouseSensor,
        TouchSensor,
        useSensor,
        useSensors
} from "@dnd-kit/core"
// import {
//         DndContext,
//         KeyboardSensor,
//         MouseSensor,
//         TouchSensor,
//         useSensor,
//         useSensors,
// } from '@dnd-kit/core';
// import {
//         SortableContext,
//         sortableKeyboardCoordinates,
// } from '@dnd-kit/sortable';
import { images } from '../images';
import { AuthContext } from '../AuthContext';
import Skeleton from './Skeleton';

const ImageGallery = () => { 
        const {img, setImg, filteredImages}= useContext(AuthContext);
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
                // Simulate an asynchronous data fetch or loading process
                
                setTimeout(() => {
                  setIsLoading(false);
                }, 3000); // Simulate a 2-second loading time
              }, []);

              const sensors = useSensors(
                useSensor(MouseSensor, {
                  // Require the mouse to move by 10 pixels before activating
                  activationConstraint: {
                    distance: 10,
                  },
                }),
                useSensor(TouchSensor, {
                  // Press delay of 250ms, with tolerance of 5px of movement
                  activationConstraint: {
                    delay: 250,
                    tolerance: 5,
                  },
                }),
                useSensor(KeyboardSensor, {
                  coordinateGetter: sortableKeyboardCoordinates,
                })
              );
  return (
        <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        >

                <SortableContext
                items={img}
                strategy={rectSortingStrategy}
                >
                        {isLoading ? 
                        (
                                <Skeleton />
                        ) : (
                        <div className='flex flex-wrap items-center justify-center gap-5 p-5 bg-black'>
                        {filteredImages.map((ite) => <SortableItem key={ite.id} id={ite.id} url={ite.url} tags={ite.tags}/>)}
                        </div>
                        )
                }
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