"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTasks, loadTask } from "@/redux/slice/TodoSlice";

import ListItem from "./ListItem";
import styles from "./list.module.css";

export default function TodoList() {
  const todoState = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (todoState.isLoading) {
    return "Sayfa Yükleniyor...";
  }
  const items = todoState.data.map((item, i) => {
    return <ListItem key={"row_" + i} item={item} />;
  });

  return <ul className={styles.list}>{items}</ul>;
}
