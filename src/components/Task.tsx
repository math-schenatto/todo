import { ThumbsUp, Trash, Check, CheckCircle, CircleWavyCheck } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css'

type Taskprops = {
    id: string;
    content: string;
    complete: boolean;
    onDeleteTaskt: (id: string) => void;
    onChangeTask: (value: boolean) => void;
}

export function Task( { id, content, complete, onDeleteTaskt, onChangeTask }  : Taskprops) {

    const [ checked, setChecked ] = useState(complete);

    function handleChangeChk(){
        setChecked(!checked)
        onChangeTask(!checked)
    }

    function handleDeleteTask(){
        onDeleteTaskt(id)
        if(checked){
            onChangeTask(!checked)
        }
    }


    return (
        <div className={styles.taskContainer}>
            
            <label  className={styles.containerCheckbox}>
                <input 
                    type="checkbox"
                    defaultChecked={checked} 
                    onChange={handleChangeChk} 
                />
                <span className={styles.checkmark}></span>
            </label >   
            
            <div className={styles.task}>
                <p className={checked ? styles.complete : ""} >{content}</p>
                <button  title="Deletar task" onClick={handleDeleteTask}>
                    <Trash size={20} />
                </button>
            </div>
        </div>


    );
}