import styles from './Tarefas.module.css';
import clip from '../img/Clipboard.png'

export function Tarefas(){
  return(
    <div className={styles.container}>
      <div className={styles.row}>
      <div className={styles.empty} >
        <img src={clip} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
      </div>
    </div>
  )
}