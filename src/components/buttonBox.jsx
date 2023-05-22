import 'bootstrap-icons/font/bootstrap-icons.css';
import './buttonBox.css';
export default function ButtonBox({ id, deleteFunc }) {
  return (
    <div className='buttonBox'>
      <button className='but pencil'>
        <i className='bi bi-pencil'></i>
      </button>
      <button className='but trash' onClick={() => deleteFunc(id)}>
        <i className='bi bi-trash'></i>
      </button>
    </div>
  );
}
