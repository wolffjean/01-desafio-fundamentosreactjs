import { useState } from "react";
import styles from "./InputTask.module.css";
import { Task } from "./Task";

export function InputTask() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState(['']);

    function handleCreateNewTask() {
        event.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function handleChangeNewTask() {
        setNewTask(event.target.value);
    }

    return (
        <div>
            <div className={styles.inputTask}>
                <form onSubmit={handleCreateNewTask}>
                    <input
                        type="text"
                        placeholder="Adiciona uma nova tarefa"
                        value={newTask}
                        onChange={handleChangeNewTask}
                    />
                    <button>Criar</button>
                </form>
            </div>
            <Task />
        </div>
    )
}