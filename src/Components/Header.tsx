import styles from "./Header.module.css";
import rocketLogo from '../assets/rocket.svg';

export function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketLogo} />
                <span>todo</span>
            </div>
        </div>
    );
}