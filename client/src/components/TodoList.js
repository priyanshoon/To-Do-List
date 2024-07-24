const TodoList = () => {
  return (
    <div class="container">
      <form>
        <div class="form-row my-5">
          <div class="col">
            <input class="form-control" type="text" placeholder="Readonly input here…" />
          </div>
          <div class="col">
            <button type="button" class="btn btn-info">Add Task</button>
          </div>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <span class="mr-4">Cras justo odio</span>
            <button type="button" class="btn btn-info my-sm-0">Add Task</button>
          </li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </form>
    </div>
  )
}

export default TodoList;
