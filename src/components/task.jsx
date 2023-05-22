import ButtonBox from './buttonBox';
import './task.css';
export default function Task({ task, deleteFunc, checkTask }) {
  return (
    <div className='task'>
      <input
        type='checkbox'
        name='taskDone'
        id='check${task.id}'
        onChange={() => checkTask(task.id)}
      />
      <input type='text' disabled value={`${task.id} ${task.content}`} />
      <ButtonBox id={task.id} deleteFunc={deleteFunc} />
    </div>
  );
}
