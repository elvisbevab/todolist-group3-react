export default function MainList({taskList}){
  console.log(`task call ${taskList}`)
  return(
    <div className="mainList">
      <ul>
        {taskList.map((task)=>(
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  )
}