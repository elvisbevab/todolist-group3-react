import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import InputForm from './components/form';
import MainList from './components/main';
import TaskHandler from './model/taskhandler';

const taskHandler = new TaskHandler();

function App() {
  const [taskList, setTaskList] = useState([]);
  function getDataFromInput(input) {
    // console.log(`Input given to function = ${input}`)
    taskHandler.createTask(input);
    // console.log(taskHandler.getAllTasks);
    // console.log(`Taskname = ${taskName}`)
    // console.log(taskHandler.getAllTasks);

    setTaskList(taskHandler.getAllTasks);
    // console.log(taskList);
  }

  function deleteTask(id) {
    taskHandler.removeTask(id);
    setTaskList(taskHandler.getAllTasks);
  }
  return (
    <>
      <div className='mainSection'>
        <InputForm getTask={getDataFromInput} />
        <MainList taskList={taskList} deleteFunc={deleteTask} />
      </div>
    </>
  );
}

export default App;
