"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import Image from "next/image";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useBoardStore } from "@/store/BoardStore";
import Container from "@/components/layout/Container";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icon } from "@iconify/react";

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
                  <Badge
                    className={`${badgeVariants({ variant: "secondary" })}`}
                  >
                    {todos.length}
                  </Badge>
                </h1>

                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <Draggable
                      draggableId={todo.$id}
                      index={index}
                      key={todo.$id + index}
                    >
                      {(itemProvided) => (
                        <div
                          className="mt-4"
                          {...itemProvided.draggableProps}
                          {...itemProvided.dragHandleProps}
                          ref={itemProvided.innerRef}
                        >
                          <Card>
                            <CardHeader className="p-3">
                              <CardTitle className="flex gap-2 items-center justify-between text-base font-normal">
                                <span>{todo.title}</span>

                                <Button
                                  className={`${buttonVariants({
                                    variant: "destructive",
                                  })} rounded-full h-auto w-auto p-2 min-w-[30px]`}
                                >
                                  <Icon icon={"mingcute:close-fill"} />
                                </Button>
                              </CardTitle>
                            </CardHeader>

                            {todo.image ? (
                              <CardContent>
                                {/* <Image
                                  src={todo.image.fileId}
                                  alt={todo.title}
                                  height={300}
                                  width={400}
                                  fill={true}
                                /> */}
                              </CardContent>
                            ) : null}
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}

                  <div className="flex justify-end pr-3 py-2">
                    <Button
                      className={` ${buttonVariants({
                        variant: "success",
                      })} rounded-full h-auto w-auto p-2 font-2xl cursor-pointer
                    `}
                    >
                      <Icon icon="ph:plus-bold" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

const Board = () => {
  const { board, getBoard, setBoard } = useBoardStore((state) => state);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);

      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoard({
        ...board,
        columns: rearrangedColumns,
      });
    }

    const columns = Array.from(board.columns);

    const startColIndex = columns[Number(source.droppableId)];
    const finishColIndex = columns[Number(destination.droppableId)];

    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };

    const finishCol: Column = {
      id: finishColIndex[0],
      todos: finishColIndex[1].todos,
    };

    if (!startCol || !finishCol) return;

    // return if position or col is same as before
    if (source.index === destination.index && startCol === finishCol) return;

    const newTodos = startCol.todos;
    const [todoMoved] = newTodos.splice(source.index, 1);

    if (startCol.id === finishCol.id) {
      // same col but different position
      newTodos.splice(destination.index, 0, todoMoved);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      const newColumn = new Map(board.columns);
      newColumn.set(startCol.id, newCol);
      setBoard({ ...board, columns: newColumn });
    } else {
      // different col
      const finishTodos = Array.from(finishCol.todos);
      finishTodos.splice(destination.index, 0, todoMoved);

      const newColumn = new Map(board.columns);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };

      newColumn.set(startCol.id, newCol);
      newColumn.set(finishCol.id, {
        id: finishCol.id,
        todos: finishTodos,
      });

      setBoard({ ...board, columns: newColumn });
    }
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
                      key={index + column.id}
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
