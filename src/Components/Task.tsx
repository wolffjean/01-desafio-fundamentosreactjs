import styles from "./task.module.css";

export function Task() {

    return (
        <div className={styles.task}>
            <hr />
            <div className={styles.statusTask}>
                <strong>Tarefas Criadas</strong>
                <strong>Concluidas</strong>
            </div>
            <div className={styles.listTask}>
                <p>comer tatu</p>
                <p>ronaldo</p>
            </div>
        </div>
    );
}