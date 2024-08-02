const TodoList = () => {
  return (
    <div className="container">
      <form>
        <div className="form-row my-5">
          <input className="form-control" type="text" placeholder="Enter your task my friend..." />
          <button type="button" className="btn btn-success my-3">Add Task</button>
        </div>
        <div className="card">
          <div className="card-body">
            { /* <h4 className="card-title">Todo: 1</h4> */}
            <p className="card-text" style={{ fontSize: 20 }}>I will make my own compiler for project and fun learning.</p>
            <button type="button" className="btn btn-info mr-2">Edit Task</button>
            <button type="button" className="btn btn-danger">Delete Task</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TodoList;
