import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
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
