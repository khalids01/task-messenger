import getTodosGroupedByColumn from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },
  setBoard(board) {
    set({ board });
  },
}));
