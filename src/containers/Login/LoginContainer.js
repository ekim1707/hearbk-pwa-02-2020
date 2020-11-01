import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import LoginComponent from "../../components/Login/LoginComponent";
import { authenticateUser } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";

const LoginContainer = ({ loginUser }) => {
  const [loginDetails, setLoginDetails] = useState({});
  const [isRememberUser, setIsRememberUser] = useState(false);
  const handleInputChange = (e) => {
    debugger;
    if (e.target.name) {
      setIsRememberUser(e.target.checked);
    } else {
      setLoginDetails({
        ...loginDetails,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleUserLogin = useCallback(() => {
    loginUser(loginDetails, isRememberUser);
  }, [loginUser, isRememberUser, loginDetails]);

  return (
    <LoginComponent
      {...loginDetails}
      isRememberUser={isRememberUser}
      onInputChange={handleInputChange}
      loginUser={handleUserLogin}
    />
  );
};

const mapStateToProps = (state) => ({
    user: userSelector(state),
});

const mapActions = (dispatch) => ({
  loginUser: (data, isRememberUser) =>
    dispatch(authenticateUser(data, isRememberUser)),
});

export default connect(
  mapStateToProps,
  mapActions
)(LoginContainer);
