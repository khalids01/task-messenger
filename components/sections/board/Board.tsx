"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import getTodosGroupedByColumn from "@/lib/getTodosGroupedByColumn";
import { useBoardStore } from "@/store/BoardStore";
const Board = () => {
  const { board, getBoard } = useBoardStore((state) => state);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  console.log(board);

  return (
    <section>
      {/* <DragDropContext>
            <Droppable droppableId='board' direction='horizontal' type='column'>
        {
            (provided)=> (
                <Card>
                    <CardHeader>
                        <CardTitle>

                        </CardTitle>
                    </CardHeader>
                </Card>
            )
        }
            </Droppable>
        </DragDropContext> */}
    </section>
  );
};

export default Board;
