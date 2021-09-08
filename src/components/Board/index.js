import { useFormik } from "formik";
import * as Yup from "yup";
import { memo, useCallback, useState } from "react";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import AutosizeInput from "react-input-autosize";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";
import Column from "./Column";
import MenuButton from "../common/Button/MenuButton";
import { dragColumn } from "../../redux/boards";
import { dragTask } from "../../redux/columns";
import styles from "./index.module.css";
import { selectBoardById } from "../../redux/selectors";

const BoardTitle = memo(({ title }) => {
  const [edit, setEdit] = useState(false);

  const showEdit = useCallback(() => setEdit(true), []);
  const hideEdit = useCallback(() => setEdit(false), []);

  const formik = useFormik({
    initialValues: {
      title,
    },
    onSubmit: (values) => {
      console.log(values);
      hideEdit();
    },
    onReset: () => hideEdit(),
    validationSchema: Yup.object({
      title: Yup.string().max(512).required(),
    }),
  });

  return (
    <div onClick={showEdit} className={styles.headerButton}>
      {edit ? (
        <form onSubmit={formik.handleSubmit}>
          <AutosizeInput
            id="title"
            name="title"
            autoFocus
            value={formik.values.title}
            spellCheck={false}
            onChange={formik.handleChange}
            onBlur={() => formik.resetForm()}
            inputClassName={clsx(styles.boardTitle, styles.editTitle)}
          />
        </form>
      ) : (
        <h2 className={styles.boardTitle}>{formik.values.title}</h2>
      )}
    </div>
  );
});

const Board = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const dispatch = useDispatch();

  const board = useSelector(selectBoardById(id));

  const onDragEnd = (result) => {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      return dispatch(dragColumn({ id, result }));
    }

    return dispatch(dragTask({ result }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BoardTitle title={board.title} />
        <MenuButton name="fa-trash" />
      </header>
      <div className={styles.content}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div
                className={styles.board}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {board.columnIds.map((columnId, index) => {
                  return (
                    <Column key={columnId} columnId={columnId} index={index} />
                  );
                })}
                {provided.placeholder}
                <AddColumn />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;
