import 'bootstrap-icons/font/bootstrap-icons.css';
export default function ButtonBox({ id }) {
  return (
    <div>
      <button class='but pencil'>
        <i class='bi bi-pencil'></i>
      </button>
      <button class='but trash'>
        <i class='bi bi-trash'></i>
      </button>
    </div>
  );
}
