import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "@/redux/slice/TodoSlice";

import styles from "./listItem.module.css";

export default function ListItem({ item }) {
  const dispatch = useDispatch();

  const updateTask = (taskId, status) => {
    const url = `https://kokpit.smartlimon.com/items/bootcamp_todo/${taskId}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(
          doneTask({
            id: resp.data.id,
            status: resp.data.status,
          })
        );
      });
  };

  const deleteTask = (taskId) => {
    const url = `https://kokpit.smartlimon.com/items/bootcamp_todo/${taskId}`;

    fetch(url, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok && resp.status === 204) {
        dispatch(removeTask(taskId));
      }
    });
  };

  return (
    <li
      className={`${styles.listItem} ${
        item.status === "done" ? styles.done : ""
      }`}
    >
      <span>{item.task}</span>
      <div className={styles.buttons}>
        {item.status === "todo" && (
          <button
            onClick={() => {
              updateTask(item.id, "done");
            }}
            className={styles.doneButton}
          >
            Done
          </button>
        )}

        <button
          onClick={() => {
            deleteTask(item.id);

            ///dispatch(removeTask(item.id));
          }}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
