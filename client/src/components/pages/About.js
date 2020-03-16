import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const About = props => {
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated } = authContext;

  const user = {
    email: "Demo@gmail.com",
    password: "123456"
  };

  const loginDemo = () => {
    login(user);
  };

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1">
        This is a full stack React, Node, Express, MongoDB app. It performs CRUD
        operations for keeping your personal or professional contacts.
      </p>
      <p>
        You can make a new account to start creating contacts or you can click
        the demo button bellow to try out the app.
      </p>
      <button onClick={loginDemo} className="btn btn-lg btn-primary m-1">
        DEMO
      </button>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
