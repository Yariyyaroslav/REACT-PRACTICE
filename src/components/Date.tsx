import React from "react";

const DateShow: React.FC = () => {
  const hours: number = new Date().getHours();
  if (hours < 12) {
    return <p>Good Morning</p>;
  } else if (hours < 18) {
    return <p>Good Afternoon</p>;
  } else {
    return <p>Good Evening</p>;
  }
};

export default DateShow;
