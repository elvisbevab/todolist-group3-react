import 'bootstrap-icons/font/bootstrap-icons.css';
export default function ButtonBox({ id, deleteFunc }) {
  return (
    <div>
      <button className='but pencil'>
        <i className='bi bi-pencil'></i>
      </button>
      <button className='but trash'>
        <i className='bi bi-trash' onClick={() => deleteFunc(id)}></i>
      </button>
    </div>
  );
}
