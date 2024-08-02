const Login = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label for="email">Email address:</label>
          <input type="email" className="form-control" placeholder="Enter email" id="email" />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Login;
