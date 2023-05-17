import ButtonBox from './buttonBox';
export default function Task({ task, deleteFunc }) {
  return (
    <div className='task'>
      <input type='checkbox' name='taskDone' id='check${task.id}' />
      <input type='text' disabled value={`Elvis ${task.id} ${task.content}`} />
      <ButtonBox id={task.id} deleteFunc={deleteFunc} />
    </div>
  );
}
