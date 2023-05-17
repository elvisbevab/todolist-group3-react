export default function MainList({ taskList }) {
  console.log(taskList);
  console.log(`task call ${taskList}`);

  return (
    <div className='mainList'>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </div>
  );
}
