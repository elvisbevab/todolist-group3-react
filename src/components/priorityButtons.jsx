import 'bootstrap-icons/font/bootstrap-icons.css';

export default function PriorityButtons({ prio, setPrio }) {
  function handleClick(event) {
    event.preventDefault();
    let but = document.getElementById(prio);
    console.log(but);
    setPrio(event.currentTarget.id);
    but.classList.remove('active');
    event.currentTarget.classList.add('active');
  }
  return (
    <div className='prio-group'>
      <button
        className='flag-white active'
        id='none'
        value={'none'}
        onClick={handleClick}
      >
        <i className='bi bi-flag-fill'></i>
      </button>
      <button
        className='flag-green'
        id='low'
        value={'low'}
        onClick={handleClick}
      >
        <i className='bi bi-flag-fill'></i>
      </button>
      <button
        className='flag-yellow'
        id='medium'
        value={'middle'}
        onClick={handleClick}
      >
        <i className='bi bi-flag-fill'></i>
      </button>
      <button
        className='flag-red'
        id='high'
        value={'high'}
        onClick={handleClick}
      >
        <i className='bi bi-flag-fill'></i>
      </button>
    </div>
  );
}
