import { useState } from "react";
import styles from "./InputTask.module.css";
import { Task } from "./Task";

export function InputTask() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState(['']);

    const quantity = tasks.length; 
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
            <div className={styles.summary}>
                <div className={styles.created}>
                    <strong>Tarefas Criadas</strong>
                    <span>{1}</span>
                </div>
                <div className={styles.done}>
                    <strong>Concluidas</strong>
                    <span>{5} de {5}</span>
                </div>
            </div>
            <Task />
        </div>
    )
}