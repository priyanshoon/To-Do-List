const Register = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label for="email">Name:</label>
          <input type="text" className="form-control" placeholder="Enter name" id="name" />
        </div>
        <div className="form-group">
          <label for="email">Email address:</label>
          <input type="email" className="form-control" placeholder="Enter email" id="email" />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Register;
