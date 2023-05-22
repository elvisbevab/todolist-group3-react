import { useState } from 'react';
import './css/sideBar.css';

const flag = <i className='bi bi-flag-fill flag-white'></i>;

export default function SideBar({ selectAll, selectStatus, selectPrio }) {
  function clickAll(event) {
    event.preventDefault();
    selectAll();
  }
  function clickStatus(event) {
    event.preventDefault();
    // console.log(event.currentTarget.value);
    selectStatus(event.currentTarget.value);
  }
  function clickPrio(event) {
    event.preventDefault();
    selectPrio(event.currentTarget.value);
  }

  return (
    <div className='sideBar' id='sideBar'>
      <button className='sidebar-button' onClick={clickAll}>
        All
      </button>
      <button className='sidebar-button' value='true' onClick={clickStatus}>
        Finished
      </button>
      <button className='sidebar-button' value='false' onClick={clickStatus}>
        Not Done
      </button>
      <button
        className='sidebar-button flag-white'
        value='none'
        onClick={clickPrio}
      >
        None{flag}
      </button>
      <button
        className='sidebar-button flag-green'
        value='low'
        onClick={clickPrio}
      >
        Low{flag}
      </button>
      <button
        className='sidebar-button flag-yellow'
        value='medium'
        onClick={clickPrio}
      >
        Middle{flag}
      </button>
      <button
        className='sidebar-button flag-red'
        value='high'
        onClick={clickPrio}
      >
        High{flag}
      </button>
    </div>
  );
}
