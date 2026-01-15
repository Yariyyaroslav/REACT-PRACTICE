import React from "react";

const LoginMessage: React.FC = () => {
  const [isLogined, setLoginStatus] = React.useState(false);
  if (!isLogined) {
    return (
      <>
        <p>Please log in</p>
        <button onClick={() => setLoginStatus(!isLogined)}>Log In</button>
      </>
    );
  } else {
    return (
      <>
        <p>Hello user</p>
        <button onClick={() => setLoginStatus(!isLogined)}>Log Out</button>
      </>
    );
  }
};

export default LoginMessage;
