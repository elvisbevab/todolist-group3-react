import ButtonBox from './buttonBox';
import './css/task.css';
export default function Task({ task, deleteFunc, checkTask }) {
  let classname = getClassName(task.getPriority);
  console.log(`das ist ${classname}`);

  if (!task.getIsComplete) {
    return (
      <div className='task'>
        <input
          type='checkbox'
          name='taskDone'
          id='check${task.id}'
          onChange={() => checkTask(task.id)}
        />
        <input type='text' disabled value={`${task.id} ${task.content}`} />
        <i className={`bi bi-flag-fill ${classname}`}></i>
        <ButtonBox id={task.id} deleteFunc={deleteFunc} />
      </div>
    );
  } else {
    return (
      <div className='task'>
        <input
          type='checkbox'
          name='taskDone'
          id='check${task.id}'
          onChange={() => checkTask(task.id)}
          checked='true'
        />
        <input
          className='done'
          type='text'
          disabled
          value={`${task.id} ${task.content}`}
        />
        <i className={`bi bi-flag-fill ${classname}`}></i>
        <ButtonBox id={task.id} deleteFunc={deleteFunc} />
      </div>
    );
  }
}

function getClassName(prio) {
  let classname = '';
  console.log(`Prio ${prio}`);
  switch (prio) {
    case 'none':
      return 'flag-white';
    case 'low':
      return 'flag-green';
    case 'medium':
      return 'flag-yellow';
    case 'high':
      return 'flag-red';
  }
}
