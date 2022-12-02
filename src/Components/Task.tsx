import { Trash } from "phosphor-react";
import styles from "./task.module.css";

interface TaskProps {
    task: string
}

export function Task({task}: TaskProps) {
    return (
        <div className={styles.taskContainer}>
            <div className={styles.task}>
                <input type="radio" />
                <span>{task}</span>
                <button title="Deletar comentario">
                    <Trash size={24}/>
                </button>
            </div>
        </div>
    );
}