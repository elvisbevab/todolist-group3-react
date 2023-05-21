import { useState } from 'react'


export default function InputForm({getTask}) {
  const [taskName, setTaskName] = useState();
  
  function handleClick(event){
    event.preventDefault()
    getTask(taskName)
    // console.log(taskName)

  }

  return (


    <div className='inputForm'>      
      <form action=''>
        <input placeholder='Please add you plan'
          onChange={(e) => {
              setTaskName(e.target.value);
            }} className='placeholderInput'></input>
        <button onClick={handleClick}>➕</button>  {/*여기사용한 onClick은 props를 위한 작명이지 함수가 아님*/}
      </form>
    </div>







  );



}
