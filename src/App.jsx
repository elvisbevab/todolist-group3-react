import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import InputForm from './components/form';
import MainList from './components/main';

function App() {
  const [count, setCount] = useState(0);
  const [taskName, setTaskName] = useState();
  const [taskList, setTaskList] = useState([]);

  function getDataFromInput(input) {
    // console.log(`Input given to function = ${input}`)
    setTaskName(input);
    // console.log(`Taskname = ${taskName}`)
    taskList.push(input);
    // console.log(taskList)
  }
  return (
    <>
      <div>
        <InputForm getTask={getDataFromInput} />
        <h1>{taskName}</h1>
        <MainList taskList={taskList} />
      </div>
    </>
  );
}

export default App;
