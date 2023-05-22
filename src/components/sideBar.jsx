import { useState } from 'react';
import './css/sideBar.css';

const flag = <i className='bi bi-flag-fill flag-white'></i>;

export default function SideBar({ selectAll, selectStatus }) {
  function clickAll(event) {
    event.preventDefault();
    selectAll();
  }
  function clickStatus(event) {
    event.preventDefault();
    selectStatus(event.currentTarget.value);
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
      <button className='sidebar-button flag-white'>None{flag}</button>
      <button className='sidebar-button flag-green'>Low{flag}</button>
      <button className='sidebar-button flag-yellow'>Middle{flag}</button>
      <button className='sidebar-button flag-red'>High{flag}</button>
    </div>
  );
}
