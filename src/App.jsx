import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import InputForm from './components/form';
import MainList from './components/main';
import TaskHandler from './model/taskhandler';
import SideBar from './components/sideBar';

const taskHandler = new TaskHandler();

function App() {
  const [taskList, setTaskList] = useState([]);
  const [prio, setPrio] = useState('none');

  function getDataFromInput(input) {
    // console.log(`Input given to function = ${input}`)
    taskHandler.createTask(input, prio);
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
  function checkTask(id) {
    taskHandler.checkTask(id);
    setTaskList(taskHandler.getAllTasks);
  }
  return (
    <div className='root'>
      <SideBar />
      <div className='mainSection'>
        <InputForm getTask={getDataFromInput} prio={prio} setPrio={setPrio} />
        <MainList
          taskList={taskList}
          deleteFunc={deleteTask}
          checkTask={checkTask}
        />
      </div>
    </div>
  );
}

export default App;
