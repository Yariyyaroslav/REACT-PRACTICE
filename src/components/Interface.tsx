import React from "react";

type UserProps = {
  role: "admin" | "user";
};

const UserInfo: React.FC<UserProps> = ({ role }) => {
  if (role === "admin") {
    return <p>Admin panel</p>;
  } else {
    return <p>Basic user information</p>;
  }
};

export default UserInfo;