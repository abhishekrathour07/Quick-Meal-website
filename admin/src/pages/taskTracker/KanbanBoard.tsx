import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Plus, MoreHorizontal, Trash } from 'lucide-react';
import { useState } from 'react';
import { Id } from './type';
import { useBoardStore } from './BoardStore';

export default function KanbanBoard() {
  const { columns, moveCard, addCard, removeCard, addColumn } = useBoardStore();
  const [newCardTitle, setNewCardTitle] = useState('');
  const [addingToColumn, setAddingToColumn] = useState<Id | null>(null);
  const [newListTitle, setNewListTitle] = useState('');
  const [addingList, setAddingList] = useState(false);

  const handleDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    moveCard(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index
    );
  };

  const handleAddCard = (columnId: Id) => {
    if (!newCardTitle.trim()) return;
    addCard(columnId, newCardTitle);
    setNewCardTitle('');
    setAddingToColumn(null);
  };

  const handleDeleteCard = (columnId: Id, cardId: Id) => {
    removeCard(columnId, cardId);
  };

  const handleAddList = () => {
    if (!newListTitle.trim()) return;
    addColumn(newListTitle); // Add new column (list)
    setNewListTitle('');
    setAddingList(false);
  };

  return (
    <div className="min-h-[90vh] bg-white bg-[url(/background.png)] p-8 overflow-hidden overflow-x-hidden scrollbar-hide rounded-xl m-2 ">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((column: any) => (
            <div key={column.id} className="flex-shrink-0 w-80 bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-semibold">{column.title}</h2>
                <button className="text-gray-400 hover:text-white">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              <Droppable droppableId={column.id.toString()}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
                    {column.cards.map((card: any, index: number) => (
                      <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-slate-700 p-3 rounded shadow-sm hover:bg-gray-600 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <p className="text-white text-sm">{card.title}</p>
                              <button
                                onClick={() => handleDeleteCard(column.id, card.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash size={16} />
                              </button>
                            </div>
                            {card.tags && (
                              <div className="flex gap-1 mt-2">
                                {card.tags.map((tag: any) => (
                                  <span key={tag} className="px-2 py-1 rounded text-xs bg-orange-600 text-white">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}

                    {addingToColumn === column.id ? (
                      <div className="mt-2">
                        <textarea
                          className="w-full p-2 rounded bg-gray-700 text-white text-sm resize-none"
                          placeholder="Enter card title..."
                          value={newCardTitle}
                          onChange={(e) => setNewCardTitle(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleAddCard(column.id);
                            }
                          }}
                          rows={2}
                        />
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => handleAddCard(column.id)}
                            className="px-3 py-1 bg-black text-white rounded text-sm hover:bg-slate-800"
                          >
                            Add
                          </button>
                          <button
                            onClick={() => setAddingToColumn(null)}
                            className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => setAddingToColumn(column.id)}
                        className="flex items-center gap-1 text-white font-bold hover:text-white mt-2 text-sm"
                      >
                        <Plus size={16} />
                        Add a card
                      </button>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          ))}

          <div className="flex-shrink-0 w-80">
            {addingList ? (
              <div className="mt-4">
                <input
                  className="w-full p-2 rounded bg-gray-700 text-white text-sm"
                  placeholder="New list title..."
                  value={newListTitle}
                  onChange={(e) => setNewListTitle(e.target.value)}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleAddList}
                    className="px-3 py-1 bg-black text-white rounded text-sm hover:bg-slate-800"
                  >
                    Add List
                  </button>
                  <button
                    onClick={() => setAddingList(false)}
                    className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAddingList(true)}
                className="w-full h-12 rounded-lg bg-gray-800/30 text-white flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-colors"
              >
                <Plus size={20} />
                Add another list
              </button>
            )}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
