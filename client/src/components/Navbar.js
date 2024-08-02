import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  }

  const handleClose = () => {
    setShowLogin(false);
  }

  const handleSignUpClick = () => {
    setShowSignUp(true);
  }

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Khandu List</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          { /* This is navbar area's where the nav will be in placed may be in future */}
        </ul>
        <button className="btn btn-outline-success mr-2 my-2 my-sm-0" onClick={handleLoginClick} data-toggle="modal" data-target="#myLogin">Login</button>
        {showLogin && (
          <div className="modal" id="myLogin">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Login</h4>
                </div>
                <div className="modal-body">
                  <Login />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" onClick={handleClose} data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <button className="btn btn-outline-info my-2 my-sm-0" onClick={handleSignUpClick} data-toggle="modal" data-target="#mySignUp">Sign Up</button>
        {showSignUp && (
          <div className="modal" id="mySignUp">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign Up</h4>
                </div>
                <div className="modal-body">
                  <Register />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" onClick={handleCloseSignUp} data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar

