import styles from './TarefaPendente.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faTrashCan } from '@fortawesome/free-solid-svg-icons';
//tarefa

export function TarefaPendente( {content, deleteTask, isChecked}){
  function handleDeleteTask(){
    deleteTask(content);
  }
  function verifyCheck(){
   isChecked(event.target)
  }

  return(
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.tarefa}>
          <div className={styles.divCheck}>
          <input onClick={verifyCheck} className={styles.checkbox} type="checkbox" name="tarefa" id={content}/>
          <label htmlFor={content}>{content}</label>
          </div>
          <button 
          onClick={handleDeleteTask}
          className={styles.button}>
          <FontAwesomeIcon className={styles.icon} icon={faTrashCan}/>
          </button>
        </div>
        
      </div>
    </div>
  )
}