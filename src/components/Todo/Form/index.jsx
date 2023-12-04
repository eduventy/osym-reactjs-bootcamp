"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { createTask } from "@/redux/slice/TodoSlice";

import styles from "./form.module.css";

export default function TodoForm() {
  const [formData, setFormData] = useState({
    task: "",
    status: "todo",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ task: formData.task }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type={"text"}
        onChange={(e) => {
          setFormData({
            task: e.target.value,
          });
        }}
        value={formData.task}
        placeholder={"Type your task"}
      />
      <button>Add</button>
    </form>
  );
}
