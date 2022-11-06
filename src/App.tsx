import { Header } from './Components/Header'
import './global.css'
import styles from './App.module.css';
import { InputTask } from './Components/InputTask';
import { Task } from './Components/Task';

function App() {

  return (


    <div className={styles.wrapper}>
      <Header />
      <InputTask />
    </div>
  )
}

export default App
