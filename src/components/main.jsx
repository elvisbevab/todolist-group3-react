import Task from './task';
export default function MainList({ taskList }) {
  console.log(taskList);
  console.log(`task call ${taskList}`);

  return (
    <div className='mainList'>
      {taskList.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
}
