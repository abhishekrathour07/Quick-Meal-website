import { create } from 'zustand';
import { Column, Id } from './type';

interface BoardState {
    columns: Column[];
    addColumn: (title: string) => void;
    addCard: (columnId: Id, title: string) => void;
    moveCard: (fromColumnId: Id, toColumnId: Id, fromIndex: number, toIndex: number) => void;
    removeCard: (columnId: Id, cardId: Id) => void; // Added removeCard
}

const defaultColumns: Column[] = [
    {
      id: 'todo',
      title: 'task lelo ',
      cards: [
        { id: '1', title: 'Fix the P... maybe the Q too?' },
        { id: '2', title: 'Invite Employee UI (but make it fun)' },
        { id: '3', title: 'Install coffee machine (critical task)' },
        { id: '4', title: 'Reorganize sock drawer (yes, it’s important)' },
        { id: '5', title: 'Fix bug in the Matrix (again!)' },
      ],
    },
    {
      id: 'hello',
      title: 'task kr rha hu',
      cards: [
        { id: '6', title: 'Write documentation (or make a meme instead?)', tags: ['Documentation', 'Fun'] },
        { id: '7', title: 'Rebuild the homepage (with more memes!)' },
        { id: '8', title: 'Test a flying car prototype (don’t ask questions)' },
        { id: '9', title: 'Design spaceship UI (real-life Star Wars vibes)' },
      ],
    },
    {
      id: 'In Review',
      title: ' deploy kr diya hu',
      cards: [
        { id: '10', title: 'Check code for cats (or bugs, whichever)' },
        { id: '11', title: 'Review report (did someone say pizza?)' },
        { id: '12', title: 'Check if the coffee machine is still alive' },
        { id: '13', title: 'Test AI (that doesn’t accidentally start a robot rebellion)' },
      ],
    },
    {
      id: 'done',
      title: 'task khtm',
      cards: [
        { id: '14', title: 'Email Verification toggle on dashboard (now with 100% more cheese)' },
        { id: '15', title: 'Company Info (in a fun, interactive dance routine)' },
        { id: '16', title: 'Fix “404 Not Found” error (turns out it was a typo!)' },
        { id: '17', title: 'Deploy app (because it’s always a good idea!)' },
        { id: '18', title: 'Code for the squirrels (they kept asking nicely)' },
      ],
    },
];

export const useBoardStore = create<BoardState>((set) => ({
    columns: defaultColumns,
    addColumn: (title) =>
        set((state) => ({
            columns: [
                ...state.columns,
                {
                    id: Date.now().toString(),
                    title,
                    cards: [],
                },
            ],
        })),
    addCard: (columnId, title) =>
        set((state) => ({
            columns: state.columns.map((col) =>
                col.id === columnId
                    ? {
                        ...col,
                        cards: [...col.cards, { id: Date.now().toString(), title }],
                    }
                    : col
            ),
        })),
    moveCard: (fromColumnId, toColumnId, fromIndex, toIndex) =>
        set((state) => {
            const newColumns = [...state.columns];
            const fromColumn = newColumns.find((col) => col.id === fromColumnId);
            const toColumn = newColumns.find((col) => col.id === toColumnId);

            if (!fromColumn || !toColumn) return { columns: newColumns };

            const [movedCard] = fromColumn.cards.splice(fromIndex, 1);
            toColumn.cards.splice(toIndex, 0, movedCard);

            return { columns: newColumns };
        }),
    removeCard: (columnId, cardId) =>
        set((state) => ({
            columns: state.columns.map((col) =>
                col.id === columnId
                    ? {
                        ...col,
                        cards: col.cards.filter((card) => card.id !== cardId),
                    }
                    : col
            ),
        })),
}));
