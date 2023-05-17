export default function ButtonBox() {
  return (
    <div>
      <button class='but pencil' value='${list[i].id}'>
        <i class='bi bi-pencil'></i>
      </button>
      <button class='but check' onclick="toggleDone('${list[i].id}')">
        <i class='fa fa-check'></i>
      </button>
      <button class='but trash' onclick="deleteTask('${list[i].id}')">
        <i class='fa fa-trash'></i>
      </button>
    </div>
  );
}
