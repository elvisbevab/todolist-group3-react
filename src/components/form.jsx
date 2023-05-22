import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './css/form.css';
import PriorityButtons from './priorityButtons';

export default function InputForm({ getTask, prio, setPrio }) {
  const [taskName, setTaskName] = useState();

  function handleClick(event) {
    event.preventDefault();
    getTask(taskName);
    // console.log(taskName)
  }

  return (
    <div className='inputForm'>
      <form action=''>
        <input
          placeholder='New Task'
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        ></input>
        <PriorityButtons prio={prio} setPrio={setPrio} />

        <button onClick={handleClick}>Add Task</button>
      </form>
    </div>
  );
}
