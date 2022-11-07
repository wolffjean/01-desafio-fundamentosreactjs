import { StackSimple, Trash } from "phosphor-react";
import styles from "./task.module.css";

export function Task() {

    return (
        <div className={styles.taskContainer}>
            <div className={styles.task}>
                <input type="radio" />
                <span>{'tarefa 1'}</span>
                <button title="Deletar comentario">
                    <Trash size={24}/>
                </button>
            </div>
        </div>
    );
}