import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Task } from './Task';
import styles from './ToDoForm.module.css'

type Taskprops = {
    id: number;
    content: string;
    complete: boolean;
}

export function ToDoForm() {
    
    const [tasks, setTasks] = useState([
        {
            id: 1,
            complete: false,
            content: "Estudar Node."
        },
        {
            id: 2,
            complete: true,
            content: "Estudar React."
        },
        {
            id: 3,
            complete: true,
            content: "Ler um livro"
        },
    ])

    const [completedTasks, setCompletedTasks] = useState( () => {
        const completedOnes = tasks.filter((task) => {
            return task.complete
        })

        return completedOnes.length
    })

    const [newTask, setNewTaskText] = useState("")

    function handleNewTask(event: FormEvent){
        event.preventDefault();
        setTasks([...tasks, {
            id: tasks.length + 1,
            complete: false,
            content: newTask
        }])
        setNewTaskText("")
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("");
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Campo Obrigatório");
    }

    function deleteTask(id : number){
        const tasksDeletedOne = tasks.filter(task => {
            return task.id !== id
        })

        setTasks(tasksDeletedOne)
    }

    function handleChangeTask(value : boolean){
        setCompletedTasks(value ? completedTasks + 1 : completedTasks - 1)
    }

    return (
        <div className={styles.todo}>


            <form onSubmit={handleNewTask}>
                <textarea 
                    name="newTask"
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleNewTaskChange} 
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button
                    type='submit'
                >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>

            <div className={styles.todoInfoBox}>
                <div className={styles.todoInfo}>
                    <p className={styles.p1}> Tarefas Criadas <span>{tasks.length}</span> </p>
                    <p className={styles.p2}> Concluídas <span>{completedTasks} de {tasks.length}</span> </p>
                </div>

                <div className={styles.todoList}>
                    <ul>
                    {tasks.map((task, index) => {
                    return (
                        <li key={index}> 
                            <Task   
                                id={task.id} 
                                content={task.content} 
                                complete={task.complete} 
                                onDeleteTaskt={deleteTask}
                                onChangeTask={handleChangeTask}
                            /> 
                        </li>
                    )
                })}
                    </ul>
                </div>
            </div>
        </div>

    );
}


{/* // export function ToDoForm() {
//     return (
//         <div className={styles.todo}>
//             <input placeholder='Adicione uma nova tarefa' />
//             <footer className={styles.todoFooter}>
//                 <button
//                     type='submit'
//                 >
//                     Criar
//                     <PlusCircle size={20}  />
//                 </button>
//             </footer>
//         </div>

//     );
// } */}