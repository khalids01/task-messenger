"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import getTodosGroupedByColumn from "@/lib/getTodosGroupedByColumn";
import { useBoardStore } from "@/store/BoardStore";
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

const Item = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
    </Card>
  );
};

const Column = ({
  todos,
  id,
  i,
}: {
  todos: Todo[];
  id: TypedColumn;
  i: number;
}) => {
  const idToColumnText: {
    [key in TypedColumn]: string;
  } = {
    todo: "To Do",
    inprogress: "In Progress",
    done: "Done",
  };
  return (
    <Draggable draggableId={id} index={i}>
      {(provider) => (
        <div
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          ref={provider.innerRef}
        >
          <Droppable droppableId={i.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 pl-4 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-500" : "bg-white/50"
                }`}
              >
                <h1 className="flex gap-4 justify-between">
                  <span>{idToColumnText[id]}</span>
                  <Badge>{todos.length}</Badge>
                </h1>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

const Board = () => {
  const { board, getBoard } = useBoardStore((state) => state);

  useEffect(() => {
    getBoard();
  }, [getBoard]);


  const handleOnDragEnd = (result: DropResult) => {
    console.log(result);
  };

  return (
    <section>
      <Container size="xl">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="board" direction="horizontal" type="column">
            {(provided) => (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {Array.from(board.columns.entries()).map(
                  ([id, column], index) => (
                    <Column
                      todos={column.todos}
                      id={column.id}
                      key={index}
                      i={index}
                    />
                  )
                )}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </section>
  );
};

export default Board;
