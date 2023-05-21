import React, { useState } from 'react';
import './App.css';
// import { 여기에,로 연달아서 아이템가져오기 ex) Button,Navbar } from 'react-bootstrap';


import InputForm from './components/form';
import MainList from './components/main';

function App() {
  const [count, setCount] = useState(0);
  const [taskName, setTaskName] = useState();
  const [taskList, setTaskList] = useState([]);



  function getDataFromInput(input) {
    setTaskName(input);
    setTaskList([...taskList, input]);
  }

  function deleteTask(index) {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  }

  function editTask(index, updatedValue) {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = updatedValue;
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <div>
        <InputForm getTask={getDataFromInput} />
        <MainList taskList={taskList} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </>
  );
}

export default App;