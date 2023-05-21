import React, { useState } from 'react';
import ButtonBox from './buttonBox';

export default function MainList({ taskList, deleteTask, editTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  function handleEdit(index, task) { // 글의 순서 + 내가 쓴 할일글을 저장
     console.log(index, task); 
    setEditIndex(index);
    setEditValue(task);
  }

  function handleSave(index) {   //말그래도 순서로 결정 . 글이 입력된 순서를 기억하고 있다. 맨처음 줄은 0번, 두번째 입력은 1번.. 이렇게 그리고나서..다시 0번째로가면 글의 순서를 보여준다. 
    console.log(index);  
    editTask(index, editValue);
    setEditIndex(null);
    setEditValue('');
  }

  return (
    <div className="mainList inputBox">
      <ul className='ulClass'>
        {taskList.map((task, i) => (
          <li key={i} className="listborder"> 
            {editIndex === i ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) =>  setEditValue(e.target.value)}
                  className="edit-input"/>
                <button onClick={() => handleSave(i)}>✔️</button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <ButtonBox
                  onDelete={() => deleteTask(i)}
                  onEdit={() => handleEdit(i, task)}
                />
              </>
            )
            
            }
          </li>





        ))}
      </ul>
    </div>
  );
}