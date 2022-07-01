import styles from './AddTarefa.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Tarefas } from './Tarefas';
import { TarefaPendente } from './TarefaPendente';
import { useState } from 'react';


export function AddTarefa(){
    const [tarefas, setTarefas] = useState([
    ])
    const[newTarefa, setNewTarefa] = useState('')
    const[tarefasCriadas, setTarefasCriadas] = useState(0)
    const[tarefasConcluidas, setTarefasConcluidas] = useState(0)
    let temTarefa 
    if(tarefas.length<=0){
    temTarefa = false ;
    }
    else{
    temTarefa= true;
    }
    function handleNewArray(){
      event.preventDefault() ;
      setTarefas([...tarefas, newTarefa])
      setTarefasCriadas(tarefas.length+1)
      setNewTarefa('')
    }

    function handleNewTarefa(){
      setNewTarefa(event.target.value)  ;
      
    }
    function deleteTask(task){
      const newTarefasDeleted = tarefas.filter(taskDeleted=>{
        return task != taskDeleted
      })
      if(newTarefasDeleted.length ==0){
        setTarefasConcluidas(0)
      }
      setTarefas(newTarefasDeleted)
      setTarefasCriadas(newTarefasDeleted.length)
    }
    function verifyChecked(input){
      if(input.checked){
        setTarefasConcluidas(tarefasConcluidas + 1)
       
      }
      else{
        setTarefasConcluidas(tarefasConcluidas - 1)
      
      }
    }



  const concluidasTarefa = `${tarefasConcluidas} de ${tarefasCriadas}`
  return(
    <>
    <form className={styles.formulario} onSubmit={handleNewArray}>
      <input 
      value={newTarefa}
      onChange= {handleNewTarefa}
      type="text"
      placeholder="Adicione uma nova tarefa" />
      <button>Criar <FontAwesomeIcon icon={faCirclePlus} /></button>
    </form>
    <div className={styles.container}>
      <div className={styles.rowCreate}>
        <p className={styles.criada} >Tarefas Criadas <span className={styles.numberCreate} >{tarefasCriadas}</span></p>
        <p className={styles.concluida}>Concluídas <span className={styles.numberDone} >{temTarefa?
        
        concluidasTarefa : tarefasConcluidas
          
      }</span></p>
      </div>
    </div>
    { 
    temTarefa?
      tarefas.map(tarefa=>{
        return ( 
        <TarefaPendente 
        isChecked={verifyChecked}
        deleteTask={deleteTask}
        key={tarefa}
        content={tarefa}
        />)
     }) : <Tarefas/>
    
     }
    
    
   
    </>
  )
}